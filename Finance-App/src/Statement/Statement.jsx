import "./Statement.css";

const statement = () => {
  return (
    <>
    <div class = "statement-container">
      <h2>Statement for Month, Year</h2>
      <div class = "statement-body" id = "statement-body">
        <div class = "statement-line">
          <label for = "starting-balance">Starting Balance:</label>
          <section name = "starting-balance">$$$</section>
        </div>
        <div class = "statement-line">
          <label for = "deposits-withdrawals">Deposits & Withdrawals:</label>
          <section name = "deposits-withdrawals">$$$</section>
        </div>
        <div class = "statement-line">
          <label for = "ending-balance">Ending Balance:</label>
          <section name = "ending-balance">$$$</section>
        </div>
        <div class = "activity-heading">
          <section class = "activity-info" id = "activity-date">Date</section>
          <section class = "activity-info" id = "activity-vendor">Vendor</section>
          <section class = "activity-info" id = "activity-description">Description</section>
          <section class = "activity-info" id = "activity-amount">Amount</section>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
export default statement;