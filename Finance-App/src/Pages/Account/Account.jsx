import "./Account.css";
import Header from "../../Components/Header.jsx";

const Account = () => {
  return (
    <>
      <Header/>
      <div className = "primary-container">
        <h2>Edit Your Account Information</h2>
        <form className = "secondary-container" id = "account-form">
          <div className = "input-line">
            <label htmlFor = "account-first-name" className = "field-label">First Name: </label>
            <input type = "text" id = "account-first-name" name = "account-first-name" className = "input-box" required/>
          </div>
          
          <div className = "input-line">
            <label htmlFor = "account-last-name" className = "field-label">Last Name: </label>
            <input type = "text" id = "account-last-name" name = "account-last-name" className = "input-box" required/>
          </div>

          

          <input type = "submit" value="Confirm"/>
        </form>
      </div>
    </>
  )
}
export default Account;