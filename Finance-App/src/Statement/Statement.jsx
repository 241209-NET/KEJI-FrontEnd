import "./Statement.css";

const Statement = () => {
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
        <div class = "activity-heading" style = {{ marginLeft: -4, marginTop: 20}}>
          <section class = "activity-info" id = "activity-date">Date</section>
          <section class = "activity-info" id = "activity-vendor">Vendor</section>
          <section class = "activity-info" id = "activity-description">Description</section>
          <section class = "activity-info" id = "activity-amount">Amount</section>
        </div>
        <ul style = {{ marginLeft: -44, marginTop: -4}}>
          <li><ActivityItem/></li>
          <li><ActivityItem/></li>
          <li><ActivityItem/></li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default Statement;

const ActivityItem = () => {
  return (
    <div class = "activity-background">
      <date class = "activity-info" id = "activity-date">11/11/2011</date>
      <section class = "activity-info" id = "activity-vendor">Keji LLC</section>
      <section class = "activity-info" id = "activity-description">Lots of Money</section>
      <money class = "activity-info" id = "activity-amount">$5000.00</money>
    </div>
  )
}