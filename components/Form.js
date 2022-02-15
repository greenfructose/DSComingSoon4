const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
      }
  return (
    <div className="mt-8 mb-0 mx-0">
        <form onSubmit={handleSubmit} className="coming-soon__form">
            <input type="text" className="coming-soon__form-input" placeholder="Email"/>
            <button className="coming-soon__form-btn" type="submit">Subscribe</button>
        </form>

        <div className="success__message" role="region" aria-label="Coming Soon Form success">
        <   div>Thanks. We will notify you once we launch.</div>
        </div>
        <div className="error__message" role="region" aria-label="Coming Soon Form failure">
            <div>Oops! Something went wrong while submitting the form.</div>
        </div>
    </div>
  )
}

export default Form