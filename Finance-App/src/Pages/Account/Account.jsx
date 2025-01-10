import "./Account.css";

const account = () => {
  return (
    <>
    <div class = "account-container">
      <h2>Edit Your Account Information</h2>
      <form class = "account-form" id = "account-form">
        <label for = "account-first-name">First Name: </label>
        <input type = "text" id = "account-first-name" name = "account-first-name" class = "input-box" required/>
        <br/>
        
        <label for = "account-last-name">Last Name: </label>
        <input type = "text" id = "account-last-name" name = "account-last-name" class = "input-box" required/>
        <br/>

        

        <input type = "submit" value="Confirm"/>
      </form>
    </div>
    </>
  )
}
export default account;