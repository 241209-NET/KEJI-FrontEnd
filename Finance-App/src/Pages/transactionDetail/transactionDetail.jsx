import "./TransactionDetail.css";
import Header from "../../Components/Header.jsx";

const TransactionDetail = () => {

  return (
    <>
      <Header/>
      <div className="primary-container">
        <h2>Transaction Details</h2>
        <form className="secondary-container">
          <div className="input-line">
            <label htmlFor="activityId" className="field-label">Activity ID: </label>
            <input
              type="text"
              id="activityId"
              placeholder="e.g., 12345"
              className="input-box"
              required
            />
          </div>
         <input type="submit" value="Search"/>
        </form>
      </div>
    </>
  );
};

export default TransactionDetail;
