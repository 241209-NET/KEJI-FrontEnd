import './homepage.css';
import { useEffect, useRef, useState } from "react";
import NavBar from "../../Components/NavBar.jsx";
import { useLocation } from "react-router-dom";
import { useGoal } from "../../context/GoalContext.jsx";
import { GetExchangeRate } from "../../GetExchangeRate.jsx";
import { FormatAsCurrency } from "../../GetExchangeRate.jsx";

function Homepage() {
  const { state } = useLocation();
  const currentBalance = state?.account?.balance || 0;
  const recentActivities = state?.account?.activities || [];

  const [quote, setQuote] = useState({ content: "", author: "" });

  const [currency] = useState(state.account.currency);
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    GetExchangeRate('USD',currency).then((result) => setExchangeRate(result));
    async function fetchQuote() {
      try {
        const response = await fetch("http://api.quotable.io/random");
        const data = await response.json();
        setQuote({ content: data.content, author: data.author });
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }

    fetchQuote();
  }, []);

  const {
    goalAmount,
    progress,
    setProgress,
    previousBalance,
    setPreviousBalance,
  } = useGoal();

  const previousBalanceRef = useRef(previousBalance);

  useEffect(() => {
    if (previousBalance === null) {
      setPreviousBalance(currentBalance);
      previousBalanceRef.current = currentBalance;
      console.log("=== First mount ===");
      console.log("Baseline set to:", currentBalance);
      return;
    }

    const diff = currentBalance - previousBalanceRef.current;

    if (diff > 0) {
      setProgress((prev) => {
        const newProgress = prev + diff;
        console.log(
          `Balance increased by ${diff}. New total progress = ${newProgress}`
        );
        return newProgress;
      });
      previousBalanceRef.current = currentBalance;
      setPreviousBalance(currentBalance);
    } else {
      console.log("No positive difference or already updated:", diff);
    }
  }, [currentBalance, previousBalance, setPreviousBalance, setProgress]);

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <h1>Dashboard</h1>

        <div className="cards-container">
          <div className="card">
            <h3>Account Balance</h3>
            <div><p>{FormatAsCurrency(currentBalance*exchangeRate, currency)}</p></div>
          </div>

          <div className="card">
            <h3>Motivational Quote</h3>
            {quote.content ? (
              <>
                <p>&quot;{quote.content}&quot;</p>
                <p>- {quote.author}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="card">
            <h3>Recent Activity</h3>
            {recentActivities.length > 0 ? (
              <ul>
                {recentActivities
                  .slice(-3)
                  .reverse()
                  .map((activity) => (
                    <li key={activity.activityId}>
                      {activity.name} - {activity.amount} ({activity.description})
                    </li>
                  ))}
              </ul>
            ) : (
              <p>No recent activities.</p>
            )}
          </div>

          <div className="card">
            <h3>Recent Goal</h3>
            {goalAmount > 0 ? (
              <>
                <p>Goal Amount: ${goalAmount}</p>
                <p>Progress: ${progress}</p>
                <p>
                  Status:{" "}
                  {progress >= goalAmount
                    ? "Goal Reached! 🎉"
                    : "In Progress"}
                </p>
              </>
            ) : (
              <p>No goal set yet.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
