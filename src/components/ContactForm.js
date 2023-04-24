import React from 'react'

function ContactForm() {
  return (
    <React.Fragment>
      <form className="row">
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">
            Ton nom
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            style={{ border: 'none', backgroundColor: '#53666d' }}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="mail" className="form-label">
            Ton E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="mail"
            aria-describedby="emailHelp"
            style={{ border: 'none', backgroundColor: '#53666d' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Ton message
          </label>
          <textarea
            className="form-control border-0"
            style={{ height: '150px', backgroundColor: '#53666d' }}
          ></textarea>
        </div>
        <span className=" text-end">
          <button
            type="submit"
            className="btn text-white"
            style={{ backgroundColor: '#00aff9' }}
            onClick={(e) => {
              e.preventDefault()
              alert(
                "L'envoie du message se fera dès qu'on clique sur ce bouton."
              )
            }}
          >
            Envoyer
          </button>
        </span>
      </form>
    </React.Fragment>
  )
}

export default ContactForm
