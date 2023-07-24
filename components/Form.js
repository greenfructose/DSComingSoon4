import { useState } from "react";
import {CgDanger} from 'react-icons/cg'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})
  const [buttonText, setButtonText] = useState("Submit")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const validate = () => {
    let tempErrors = {}
    let isValid = true
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (re.test(email) !== true) {
      tempErrors["email"] = true
      isValid = false
    }

    if (!name) {
      tempErrors["name"] = true
      isValid = false
    }

    if (!message) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors });
    console.log("Errors: ", errors);
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = validate()

    if (isValidForm) {
      setButtonText("Sending...")
      const response = await fetch('https://formsubmit.co/2e251fa3e0b8e1aa6681887c2669c2bb', {
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      setShowSuccessMessage(true)
      setShowErrorMessage(false)
      setButtonText("Submit")
      setName("")
      setEmail("")
      setMessage("")
      return
    }
  };

  return (
    <div className="mt-8 mb-0 mx-0">
      <form onSubmit={handleSubmit} className="coming-soon__form">
        {errors?.name && (<p className="text-roke-red align-middle">Name required <CgDanger style={{display: 'inline-block'}}/></p>)} 
        {errors?.email && (<p className="text-roke-red align-middle">Correct email required <CgDanger style={{display: 'inline-block'}}/></p>)}
        {errors?.message && (<p className="text-roke-red align-middle">Message required <CgDanger style={{display: 'inline-block'}}/></p>)}
        <div>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="coming-soon__form-input" placeholder="Name"/>
        </div>
        <div>
        <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} className="coming-soon__form-input" placeholder="Email"/>
        </div>
        <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} rows="4" className="coming-soon__form-input" placeholder="Reason"></textarea>
        <button className="coming-soon__form-btn" type="submit">
          {buttonText}
        </button>
      </form>

      {showSuccessMessage && (
      <div className="success__message" role="region" aria-label="Coming Soon Form success">
        <div>Thanks. We will reach out to you as soon as possible.</div>
      </div>
      )}
      {showErrorMessage && (
      <div className="error__message" role="region" aria-label="Coming Soon Form failure">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
      )}
    </div>
  );
};

export default Form;
