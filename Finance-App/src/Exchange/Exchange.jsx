import "./Exchange.css";

const Exchange = () => {
  return (
    <>
    <div class = "exchange-container">
      <h2>Exchange Acccount #### From ???</h2>
      <form class = "exchange-form" id = "exchange-form">
        
        <label for = "exchange-currency">Currency: </label>
        <input type = "text" name = "exchange-currency" class = "input-box" placeholder = "USD" minLength = {3} maxLength = {3} required/>
        <br/>

        <input type = "submit" value="Exchange"/>
      </form>
    </div>
    </>
  )
}
export default Exchange;