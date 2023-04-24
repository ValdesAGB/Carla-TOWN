import React from 'react'
import { experience } from '../data'

function Experience() {
  return (
    <React.Fragment>
      <div className="col row">
        {experience('200', 'Projets')}
        {experience('5', "ans d'expérience")}
        {experience('150', 'Avis Positif')}
        {experience('200', 'Recommandations')}
      </div>
    </React.Fragment>
  )
}

export default Experience
