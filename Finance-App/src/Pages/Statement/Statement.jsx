import "./Statement.css";
import Header from "../../Components/Header.jsx";
const Statement = () => {
  return (
    <>
      <Header/>
      <div className = "primary-container">
        <h2>Statement for Month, Year</h2>
        <div className = "secondary-container" id = "statement-body">
          <div className = "statement-line">
            <label htmlFor = "starting-balance" className = "minor-field-label">Starting Balance:</label>
            <section name = "starting-balance">$$$</section>
          </div>
          <div className = "statement-line">
            <label htmlFor = "deposits-withdrawals" className = "minor-field-label">Deposits & Withdrawals:</label>
            <section name = "deposits-withdrawals">$$$</section>
          </div>
          <div className = "statement-line">
            <label htmlFor = "ending-balance" className = "minor-field-label">Ending Balance:</label>
            <section name = "ending-balance">$$$</section>
          </div>
          <div className = "activity-heading" style = {{ marginLeft: -4, marginTop: 20}}>
            <section className = "activity-info" id = "activity-date">Date</section>
            <section className = "activity-info" id = "activity-vendor">Vendor</section>
            <section className = "activity-info" id = "activity-description">Description</section>
            <section className = "activity-info" id = "activity-amount">Amount</section>
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
    <div className = "activity-background">
      <section className = "activity-info" id = "activity-date">11/11/2011</section>
      <section className = "activity-info" id = "activity-vendor">Keji LLC</section>
      <section className = "activity-info" id = "activity-description">Lots of Money</section>
      <section className = "activity-info" id = "activity-amount">$5000.00</section>
    </div>
  )
}