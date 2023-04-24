import React from 'react'
import Biographie from '../../components/Biographie'
import Experience from '../../components/Experience'

function APropos() {
  return (
    <React.Fragment>
      <section className="py-5" id="aboutme">
        <div className="row justify-content-center  ">
          <h3 className="text-center col-12">
            A PROPOS DE <span style={{ color: '#00aff9' }}>MOI</span>
          </h3>
          <hr className="text-center col-1 " />
        </div>
        <div className=" row justify-content-center">
          <div className="row  col-6">
            <Biographie />
            <Experience />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default APropos
