import "./Exchange.css";
import Header from "../../Components/Header.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Exchange = () => {
  const { state } = useLocation();
  const [currency, setCurrency] = useState(state.account.currency);
  const [status, setStatus] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const setCurrency = async () => {
      try {
        const res = await axios.patch(
          `${import.meta.env.VITE_API}/api/Account/${
            state.account.accountId
          }/${currency}`
        );

        setStatus(res.data)
      } catch (error) {
        console.log(error);
      }
    };

    if (isSubmitted) {
      state.account.currency = currency
      setCurrency();
    }
  }, [isSubmitted]);

  return (
    <>
      <Header />
      <div className="primary-container">
        <h2>Exchange Balance From {state.account.currency}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
          }}
          className="secondary-container"
          id="exchange-form"
        >
          <div className="input-line">
            <label htmlFor="exchange-currency" className="field-label">
              Currency:{" "}
            </label>
            <input
              type="text"
              name="exchange-currency"
              onChange={(e) => setCurrency(e.target.value)}
              className="input-box"
              placeholder="USD"
              minLength={3}
              maxLength={3}
              required
            />
          </div>

          <div className="input-line">
            <p>{status}</p>
          </div>

          <input type="submit" value="Exchange" />
        </form>
      </div>
    </>
  );
};
export default Exchange;
