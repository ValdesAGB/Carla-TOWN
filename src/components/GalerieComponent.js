import React from 'react'

function GalerieComponent({ title, cover }) {
  const indice = `Ici une page s'ouvrira selon l'élément voulu et le présentera en détails`

  return (
    <React.Fragment>
      <div className="card p-0 mx-2 border-0" style={{ width: '18rem' }}>
        <img
          src={cover}
          className="card-img-top "
          alt="Ma galerie"
          style={{ height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark">
            Mes <span className="fw-bold">{title}</span>
          </h5>

          <span className="text-center row justify-content-center">
            <button
              className="btn btn-primary col-6 border-0 rounded-5"
              style={{
                backgroundColor: '#00121c',
                fontFamily: 'Montserrat',
                color: '#00aff9',
              }}
              onClick={() => alert(indice)}
            >
              Parcourir
            </button>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GalerieComponent
