import "./Transaction.css";
import Header from "../../Components/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Transaction = () => {
  const [amount, setAmount] = useState();
  const [merchant, setMerchant] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [recurring, setRecurring] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    const createActivity = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_API}/api/Activity`, {
          name: merchant,
          amount: amount,
          description: description,
          isRecurring: recurring,
          activityDate: date,
          accountId: state.account.accountId,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (isSubmitted) createActivity();
  }, [isSubmitted]);

  return (
    <>
      <Header />
      <div className="primary-container">
        <h2>Make New Deposit/Withdraw</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
            
          }}
          className="secondary-container"
          id="transaction-form"
        >
          <div className="input-line">
            <label htmlFor="transaction-amount" className="field-label">
              Amount:{" "}
            </label>
            <input
              type="number"
              id="transaction-amount"
              onChange={(e) => setAmount(e.target.value)}
              name="transaction-amount"
              className="input-box"
              placeholder="0.00"
              required
            />
          </div>

          <div className="input-line">
            <label htmlFor="transaction-merchant" className="field-label">
              Merchant:{" "}
            </label>
            <input
              type="text"
              name="transaction-merchant"
              onChange={(e) => setMerchant(e.target.value)}
              className="input-box"
              placeholder="Store"
              required
            />
          </div>

          <div className="input-line">
            <label htmlFor="transaction-description" className="field-label">
              Description:{" "}
            </label>
            <input
              type="text"
              name="transaction-description"
              onChange={(e) => setDescription(e.target.value)}
              className="input-box"
              placeholder="Food"
            />
          </div>

          <div className="input-line">
            <label htmlFor="transaction-date" className="field-label">
              Date:{" "}
            </label>
            <input
              type="date"
              name="transaction-date"
              onChange={(e) => setDate(e.target.value)}
              className="input-box"
              style={{ width: 120 }}
              required
            />

            <label htmlFor="transaction-recurring" className="field-label">
              Recurring:{" "}
            </label>
            <section className="stacked-radio-answer-list">
              <input
                type="radio"
                id="transaction-recurring-no"
                onClick={() => setRecurring(false)}
                name="transaction-recurring"
                value="No"
                defaultChecked
                required
              />
              <label
                htmlFor="transaction-recurring-no"
                className="transaction-radio-answer"
              >
                No
              </label>
              <br />
              <input
                type="radio"
                id="transaction-recurring-yes"
                onClick={() => setRecurring(true)}
                name="transaction-recurring"
                value="Yes"
                required
              />
              <label
                htmlFor="transaction-recurring-yes"
                className="transaction-radio-answer"
              >
                Yes
              </label>
            </section>
          </div>

          <input type="submit" value="Deposit" />
        </form>
      </div>
    </>
  );
};
export default Transaction;
