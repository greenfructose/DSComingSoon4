import { useState } from "react";
import {CgDanger} from 'react-icons/cg'

const Form = () => {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [buttonText, setButtonText] = useState("Subscribe")
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

    setErrors({ ...tempErrors });
    console.log("Errors: ", errors);
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = validate()

    if (isValidForm) {
      setButtonText("Sending...")
      const response = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      const { error } = await response.json()

      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
        setButtonText("Subscribe")
        setEmail("")
        return
      } else {
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
        setButtonText("Subscribe")
        setEmail("")
        return
      }

    }
  };

  return (
    <div className="mt-8 mb-0 mx-0">
      <form onSubmit={handleSubmit} className="coming-soon__form">
        {errors?.email && (<p className="text-roke-red align-middle">Correct email required <CgDanger style={{display: 'inline-block'}}/></p>)}
        <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} className="coming-soon__form-input" placeholder="Email"/>
        <button className="coming-soon__form-btn" type="submit">
          {buttonText}
        </button>
      </form>

      {showSuccessMessage && (
      <div className="success__message" role="region" aria-label="Coming Soon Form success">
        <div>Thanks. We will notify you once we launch.</div>
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
