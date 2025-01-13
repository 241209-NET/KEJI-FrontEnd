import "./Account.css";
import Header from "../../Components/Header.jsx";

const Account = () => {
  return (
    <>
      <Header/>
      <div class = "primary-container">
        <h2>Edit Your Account Information</h2>
        <form class = "secondary-container" id = "account-form">
          <div class = "input-line">
            <label for = "account-first-name" class = "field-label">First Name: </label>
            <input type = "text" id = "account-first-name" name = "account-first-name" class = "input-box" required/>
          </div>
          
          <div class = "input-line">
            <label for = "account-last-name" class = "field-label">Last Name: </label>
            <input type = "text" id = "account-last-name" name = "account-last-name" class = "input-box" required/>
          </div>

          

          <input type = "submit" value="Confirm"/>
        </form>
      </div>
    </>
  )
}
export default Account;