import "./TransactionDetail.css";

const TransactionDetail = () => {

  return (
    <div className="transaction-detail-container">
      <h1>Transaction Details</h1>

      <div className="search-bar">
        <label htmlFor="activityId">Enter Activity ID: </label>
        <input
          type="text"
          id="activityId"
          placeholder="e.g., 12345"
        />
        <button>Search</button>
      </div>

    </div>
  );
};

export default TransactionDetail;
