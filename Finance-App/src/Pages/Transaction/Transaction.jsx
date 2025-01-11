import "./Transaction.css";
import Header from "../../Components/Header.jsx";

const Transaction = () => {
  return (
    <>
      <Header/>
      <div class = "primary-container">
        <h2>Make New Deposit in Account #</h2>
        <form class = "secondary-container" id = "transaction-form">
          <div class = "input-line">
            <label for = "transaction-amount" class = "field-label">Amount: </label>
            <input type = "number" id = "transaction-amount" name = "transaction-amount" class = "input-box" placeholder = "0.00" required/>
          </div>
          
          <div class = "input-line">
            <label for = "transaction-merchant" class = "field-label">Merchant: </label>
            <input type = "text" name = "transaction-merchant" class = "input-box" placeholder = "Store" required/>
          </div>
          
          <div class = "input-line">
            <label for = "transaction-description" class = "field-label">Description: </label>
            <input type = "text" name = "transaction-description" class = "input-box" placeholder = "Food"/>
          </div>

          <div class = "input-line">
            <label for = "transaction-date" class = "field-label">Date: </label>
            <input type = "date" name = "transaction-date" class = "input-box" style = {{width:95}} required/>

            <label for = "transaction-recurring" class = "field-label">Recurring: </label>
            <section class = "stacked-radio-answer-list">
              <input type = "radio" id="transaction-recurring-no" name="transaction-recurring" value="No" defaultChecked  required/>
              <label for = "transaction-recurring-no" class = "transaction-radio-answer">No</label>
              <br/>
              <input type = "radio" id="transaction-recurring-yes" name="transaction-recurring" value="Yes" required/>
              <label for = "transaction-recurring-yes" class = "transaction-radio-answer">Yes</label>
            </section>
          </div>

          <input type = "submit" value="Deposit"/>
        </form>
      </div>
    </>
  )
}
export default Transaction;