import React from 'react'
import Welcome from '../../components/Welcome'
import styled from 'styled-components'

function Accueil() {
  const Style = styled.section`
    background-color: #00121c;
    color: white;
    font-family: 'Montserrat';
  `
  return (
    <React.Fragment>
      <Style className="py-5 " id="accueil">
        <div className="row align-items-center ">
          <div className="col-12 col-md-5">
            <img
              className="w-100"
              src="https://www.portraitprofessionnel.fr/wp-content/uploads/2022/02/Photographe_profesionnel_portrait_studio_corporate.jpg"
              alt="Carla TOWN"
            />
          </div>
          <Welcome />
        </div>
      </Style>
    </React.Fragment>
  )
}

export default Accueil
