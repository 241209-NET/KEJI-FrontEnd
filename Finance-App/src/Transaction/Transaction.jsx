import "./Transaction.css";

const Transaction = () => {
  return (
    <>
    <div class = "transaction-container">
      <h2>Make New Deposit in Account #</h2>
      <form class = "transaction-form" id = "transaction-form">
        <label for = "transaction-amount">Amount: </label>
        <input type = "number" id = "transaction-amount" name = "transaction-amount" class = "input-box" placeholder = "0.00" required/>
        <br/>
        
        <label for = "transaction-merchant">Merchant: </label>
        <input type = "text" name = "transaction-merchant" class = "input-box" placeholder = "Store" required/>
        <br/>
        
        <label for = "transaction-description">Description: </label>
        <input type = "text" name = "transaction-description" class = "input-box" placeholder = "Food"/>
        <br/>

        <label for = "transaction-date">Date: </label>
        <input type = "date" name = "transaction-date" class = "input-box" required/>
        <br/>

        <label for = "transaction-recurring">Recurring: </label>
        <input type = "radio" id="transaction-recurring-no" name="transaction-recurring" value="HTML" class = "radio-checkbox" required/>
        <label for = "transaction-recurring-no">No</label>
        <input type = "radio" id="transaction-recurring-yes" name="transaction-recurring" value="CSS" class = "radio-checkbox" required/>
        <label for = "transaction-recurring-yes">Yes</label>
        <br/>

        <input type = "submit" value="Deposit"/>
      </form>
    </div>
    </>
  )
}
export default Transaction;