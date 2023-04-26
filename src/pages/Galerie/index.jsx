import React from 'react'
import GalerieComponent from '../../components/GalerieComponent'
import styled from 'styled-components'

function Galerie() {
  const Style = styled.section`
    background-color: #00121c;
    color: white;
    font-family: 'Montserrat';
  `
  return (
    <React.Fragment>
      <Style className="py-5 container-fluid" id="galerie">
        <div className="row justify-content-center  ">
          <h3 className="text-center col-12">
            MA <span style={{ color: '#00aff9' }}>GALERIE</span>
          </h3>
          <hr className="text-center col-1 " />
          <p className="text-center row justify-content-center col-12">
            <span className="col-md-6 col-12 ">
              J'ai regroupé ici, l'ensemble de mes prises,{' '}
              <span>Images et vidéos</span> pour vous permettre d'apprécié ma
              créativité.
            </span>
          </p>
        </div>
        <div className="row justify-content-center my-5">
          <GalerieComponent
            cover={
              'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
            }
            title={'Images'}
          />
          <GalerieComponent
            cover={
              'https://dopslide.com/wp-content/uploads/2023/02/couverture.png'
            }
            title={'Vidéos'}
          />
        </div>
      </Style>
    </React.Fragment>
  )
}

export default Galerie
