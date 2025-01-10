import "./Transaction.css";

const Transaction = () => {
  return (
    <>
    <div class = "transaction-container">
      <h2>Make New Deposit in Account #</h2>
      <form class = "transaction-form" id = "transaction-form">
        <div class = "input-line">
          <label for = "transaction-amount">Amount: </label>
          <input type = "number" id = "transaction-amount" name = "transaction-amount" class = "input-box" placeholder = "0.00" required/>
        </div>
        
        <div class = "input-line">
          <label for = "transaction-merchant">Merchant: </label>
          <input type = "text" name = "transaction-merchant" class = "input-box" placeholder = "Store" required/>
        </div>
        
        <div class = "input-line">
          <label for = "transaction-description">Description: </label>
          <input type = "text" name = "transaction-description" class = "input-box" placeholder = "Food"/>
        </div>

        <div class = "input-line">
          <label for = "transaction-date">Date: </label>
          <input type = "date" name = "transaction-date" class = "input-box" style = {{width:95}} required/>

          <label for = "transaction-recurring">Recurring: </label>
          <section class = "stacked-radio-answer-list">
            <input type = "radio" id="transaction-recurring-no" name="transaction-recurring" value="No" required/>
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