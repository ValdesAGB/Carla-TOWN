import React from 'react'

function Welcome() {
  const CV = `Avec ce boutton le CV du client sera téléchargé par le visiteur du portfolio.`

  return (
    <React.Fragment>
      <div className="col-6">
        <h2>Hello, je suis Carla TOWN</h2>
        <h2 style={{ color: '#00aff9' }}>PHOTOGRAPHE</h2>
        <p>
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
      </div>
    </React.Fragment>
  )
}

export default Welcome
