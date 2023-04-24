import React from 'react'
import { coordonnes } from '../../data'
import ContactForm from '../../components/ContactForm'
import styled from 'styled-components'

function Contact() {
  const Style = styled.section`
    background-color: #00121c;
    color: white;
    font-family: 'Montserrat';
  `
  return (
    <React.Fragment>
      <Style>
        <div className="container my-5" id="contact">
          <div className="row justify-content-center mb-5 ">
            <h3 className="text-center col-12">
              CONTACTEZ-<span style={{ color: '#00aff9' }}>MOI</span>
            </h3>
            <hr className="text-center col-1 " />
          </div>
          <div className="row">
            <div className="row col text-center">
              <h3>CONTACTEZ-MOI ICI</h3>
              {coordonnes.map(({ id, icone, title }) => (
                <i className={`col-12 fs-5  ${icone}`} key={id}>
                  <span> {title}</span>
                </i>
              ))}
            </div>
            <div className="col">
              <ContactForm />
            </div>
          </div>
        </div>
      </Style>
    </React.Fragment>
  )
}

export default Contact
