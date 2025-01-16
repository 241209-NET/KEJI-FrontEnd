import { useState } from "react";
import Header from '../../Components/Header.jsx';
import { useGoal } from "../../context/GoalContext.jsx";

const Goals = () => {
  const [inputAmount, setInputAmount] = useState("");
  const { setGoalAmount, goalAmount, setProgress } = useGoal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedGoal = parseFloat(inputAmount);

    if (!isNaN(parsedGoal) && parsedGoal > 0) {

      if (goalAmount > 0) {
        setProgress(0);
      }
      setGoalAmount(parsedGoal);
      setInputAmount("");
    } else {
      alert("Please enter a valid goal amount.");
    }
  };

  return (
    <>
      <Header />
      <div className="primary-container">
        <h2>Set a Goal</h2>
        <form
          className="secondary-container"
          id="exchange-form"
          onSubmit={handleSubmit}
        >
          <div className="input-line">
            <label htmlFor="amount" className="field-label">
              Enter an Amount
            </label>
            <input
              type="text"
              id="amount"
              placeholder="e.g., 12345"
              className="input-box"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Goals;
