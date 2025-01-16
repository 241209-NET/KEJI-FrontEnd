import "./Statement.css";
import Header from "../../Components/Header.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Statement = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const [date, setDefaultDate] = useState(
    `${today.getFullYear()}-${month < 10 ? `0${month}` : month}`
  );
  const [currentMonthMessage, setCurrentMonthMessage] = useState();
  const [deposits, setDeposits] = useState();
  const [withdrawls, setWithdrawls] = useState();
  const [activities, setActivities] = useState();

  const { state } = useLocation();

  useEffect(() => {
    if (state.account.statements.length === 0) {
      if (
        date === `${today.getFullYear()}-${month < 10 ? `0${month}` : month}`
      ) {
        setCurrentMonthMessage("no statement for current month");
      } else {
        const creatingStatement = async () => {
          try {
            const month_day = date.split("-");
            const statement_res = await axios.get(
              `${import.meta.env.VITE_API}/api/Statement/${month_day[1]}/01/${
                month_day[0]
              }/${state.account.accountId}`
            );

            const activityIds = state.account.activities
              .filter((a) => a.activityDate.includes(date))
              .map((a) => a.activityId);

            await axios.patch(
              `${import.meta.env.VITE_API}/api/Activity/${
                statement_res.data.statementId
              }`,
              activityIds
            );
          } catch (error) {
            console.log(error);
          }
        };
        creatingStatement();
        setCurrentMonthMessage();
      }
    } else {
      if (
        date === `${today.getFullYear()}-${month < 10 ? `0${month}` : month}`
      ) {
        setCurrentMonthMessage("no statement for current month");
      } else {
        const dates = state.account.statements.map((o) => o.startDate);
        const foundStatement = dates.some((s) => s.includes(date));

        if (foundStatement) {
          const stateStatement = state.account.statements.find(
            (s) => s.startDate === `${date}-01`
          );
          setActivities(stateStatement.activities);
          setWithdrawls(
            stateStatement.activities
              .filter((o) => o.amount < 0)
              .reduce((sum, o) => sum + o.amount, 0)
          );
          setDeposits(
            stateStatement.activities
              .filter((o) => o.amount > 0)
              .reduce((sum, o) => sum + o.amount, 0)
          );
          setCurrentMonthMessage();
        } else {
          const creatingStatement = async () => {
            try {
              const month_day = date.split("-");
              const statement_res = await axios.get(
                `${import.meta.env.VITE_API}/api/Statement/${month_day[1]}/01/${
                  month_day[0]
                }/${state.account.accountId}`
              );
  
              const activityIds = state.account.activities
                .filter((a) => a.activityDate.includes(date))
                .map((a) => a.activityId);
  
              await axios.patch(
                `${import.meta.env.VITE_API}/api/Activity/${
                  statement_res.data.statementId
                }`,
                activityIds
              );
            } catch (error) {
              console.log(error);
            }
          };
          creatingStatement();
          setCurrentMonthMessage();
        }
      }
    }
  }, [date]);

  return (
    <>
      <Header />
      {!currentMonthMessage && (
        <div className="primary-container">
          <h2>Statement for {date}</h2>
          <div className="secondary-container" id="statement-body">
            <div className="statement-line">
              <label
                htmlFor="deposits-withdrawals"
                className="minor-field-label"
              >
                Deposits:
              </label>
              <section name="deposits-withdrawals">{deposits}</section>
            </div>
            <div className="statement-line">
              <label
                htmlFor="deposits-withdrawals"
                className="minor-field-label"
              >
                Withdrawals:
              </label>
              <section name="deposits-withdrawals">{withdrawls}</section>
            </div>
            <div
              className="activity-heading"
              style={{ marginLeft: -4, marginTop: 20 }}
            >
              <section className="activity-info" id="activity-date">
                Date
              </section>
              <section className="activity-info" id="activity-vendor">
                Vendor
              </section>
              <section className="activity-info" id="activity-description">
                Description
              </section>
              <section className="activity-info" id="activity-amount">
                Amount
              </section>
            </div>
            <ul style={{ marginLeft: -44, marginTop: -4, overflow:"hidden", overflowY:"scroll" }}>
              {activities && activities.map((activity, index) => (
                <li key={index}>
                  <div className="activity-background">
                    <section className="activity-info" id="activity-date">
                      {activity.date}
                    </section>
                    <section className="activity-info" id="activity-vendor">
                      {activity.name}
                    </section>
                    <section
                      className="activity-info"
                      id="activity-description"
                    >
                      {activity.description}
                    </section>
                    <section className="activity-info" id="activity-amount">
                      {activity.amount}
                    </section>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="secondary-container_2">
        <div className="statement-line">
          <label
            htmlFor="deposits-withdrawals"
            className="minor-field-label"
            style={{ marginBottom: 15 }}
          >
            Statement Date:
          </label>
          <input
            type="month"
            name="statement-date"
            id="date"
            style={{ color: "black" }}
            value={date}
            max={`${today.getFullYear()}-${month < 10 ? `0${month}` : month}`}
            min={
              state.account.activities
                .map((e) => new Date(e.activityDate))
                .sort((d1, d2) => d1 - d2)
                .map((date) => date.toISOString().slice(0, 7))[0]
            }
            onChange={(e) => {
              setDefaultDate(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Statement;
