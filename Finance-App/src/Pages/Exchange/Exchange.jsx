import "./Exchange.css";
import Header from "../../Components/Header.jsx";

const Exchange = () => {
  return (
    <>
      <Header/>
      <div className = "primary-container">
        <h2>Exchange Balance From ???</h2>
        <form className = "secondary-container" id = "exchange-form">
          
          <div className = "input-line">
            <label htmlFor = "exchange-currency" className = "field-label">Currency: </label>
            <input type = "text" name = "exchange-currency" className = "input-box" placeholder = "USD" minLength = {3} maxLength = {3} required/>
          </div>

          <input type = "submit" value="Exchange"/>
        </form>
      </div>
    </>
  )
}
export default Exchange;