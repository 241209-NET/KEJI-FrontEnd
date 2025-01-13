import "./Exchange.css";
import Header from "../../Components/Header.jsx";

const Exchange = () => {
  return (
    <>
      <Header/>
      <div class = "primary-container">
        <h2>Exchange Balance From ???</h2>
        <form class = "secondary-container" id = "exchange-form">
          
          <div class = "input-line">
            <label for = "exchange-currency" class = "field-label">Currency: </label>
            <input type = "text" name = "exchange-currency" class = "input-box" placeholder = "USD" minLength = {3} maxLength = {3} required/>
          </div>

          <input type = "submit" value="Exchange"/>
        </form>
      </div>
    </>
  )
}
export default Exchange;