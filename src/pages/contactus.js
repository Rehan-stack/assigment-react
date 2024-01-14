import Header from "../components/header";
import Footer from "../components/footer";


export default function Contact(){
    return(
        <>
<Header/>
<div>
    <br />
<div className="container">
  <form id="myForm">
    <h1>Contact US</h1>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <span id="nameError" className="error" />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <span id="emailError" className="error" />
    <br />
    <label htmlFor="organization">Organization:</label>
    <input type="text" id="organization" name="organization" required />
    <span id="orgError" className="error" />
    <br />
    <label htmlFor="textbox">Text Box (max 100 words):</label>
    <textarea id="textbox" name="textbox" rows={4} cols={50} required defaultValue={""} />
    <span id="textboxError" className="error" />
    <br />
    <input type="checkbox" id="verify" required />
    <label htmlFor="verify">I verify that all fields are entered</label>
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
</div>
</div>
<Footer/>
</>
    )
}