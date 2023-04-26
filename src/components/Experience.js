import React from 'react'
import { experience } from '../data'

function Experience() {
  return (
    <React.Fragment>
      <div className="col-md col-12 mb-4 mb-md-0 order-md-1 order-0 row justify-content-center">
        {experience('200', 'Projets')}
        {experience('5', "ans d'expérience")}
        {experience('150', 'Avis Positif')}
        {experience('200', 'Recommandations')}
      </div>
    </React.Fragment>
  )
}

export default Experience
