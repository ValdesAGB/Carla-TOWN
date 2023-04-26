import React from 'react'

function Biographie() {
  const CV = `Avec ce boutton le CV du client sera téléchargé par le visiteur du portfolio.`
  return (
    <React.Fragment>
      <div className="col-12 col-md-5 order-md-0 order-1 ">
        <h5>L'ESSENTIEL A CONNAITRE SUR MOI</h5>
        <p className="fw-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit. smod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <button
          className="btn text-white"
          style={{ backgroundColor: '#00aff9' }}
          onClick={() => alert(CV)}
        >
          Télécharger mon CV
        </button>
      </div>
    </React.Fragment>
  )
}

export default Biographie
