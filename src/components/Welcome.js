import React from 'react'
import styled from 'styled-components'

function Welcome() {
  const CV = `Avec ce boutton le CV du client sera téléchargé par le visiteur du portfolio.`

  const DIV = styled.div`
    @media (max-width: 768px) {
      margin-top: -200px;
    }
  `

  return (
    <React.Fragment>
      <DIV className="col-md-6 col-12 d-one d-md-block">
        <h2>Hello, je suis Carla TOWN</h2>
        <h2 style={{ color: '#00aff9' }}>PHOTOGRAPHE</h2>
        <p className="fw-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <button
          className="btn text-white"
          style={{ borderColor: '#00aff9' }}
          onClick={() => alert(CV)}
        >
          Télécharger mon CV
        </button>
      </DIV>
    </React.Fragment>
  )
}

export default Welcome
