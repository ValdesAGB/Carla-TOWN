import React from 'react'
import styled from 'styled-components'

function BlogCard({ id, cover, title, text }) {
  const Card = styled.div`
    border: 1px solid #c1c1c1;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  `

  const alerts = `A cette étape, un pop ou fenêtre ou encore une page s'ouvrira pour présenter les détails de l'article. Si c'est une page, on aura la possibilité de mettre un espace commentaire. Les choix sont multiples`
  return (
    <React.Fragment>
      <Card className="card m-1 mb-5 mb-md-1" onClick={() => alert(alerts)}>
        <img
          src={cover}
          className="card-img-top"
          alt={id}
          style={{ height: '150px' }}
        />
        <h5 className="card-title ms-1">{title}</h5>
        <div className="card-body">
          <p className="card-text fw-light">{text && text.slice(0, 90)}...</p>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default BlogCard
