import React, { useState } from 'react'
import { blogElemens } from '../../data'
import BlogCard from '../../components/BlogCard'

function Blog() {
  const [all, setAll] = useState(false)
  return (
    <React.Fragment>
      <section className="py-5 row  d-md-block" id="blog">
        <div className="row justify-content-center mb-3 ">
          <h3 className="text-center col-12">
            MON <span style={{ color: '#00aff9' }}>BLOG</span>
          </h3>
          <hr className="text-center col-1 " />
        </div>
        <div className="row m-3 justify-content-center">
          {!all
            ? blogElemens.slice(0, 2).map(({ id, cover, title, text }) => (
                <span key={id} className="col-md-3 col-12">
                  <BlogCard id={id} cover={cover} title={title} text={text} />
                </span>
              ))
            : blogElemens.map(({ id, cover, title, text }) => (
                <span key={id} className="col-md-3 col-12">
                  <BlogCard id={id} cover={cover} title={title} text={text} />
                </span>
              ))}
        </div>
        <div className="row justify-content-end">
          {!all && blogElemens.length > 2 ? (
            <button
              className="btn col-6 col-md-2"
              onClick={() => setAll(true)}
              style={{ borderColor: '#00aff9' }}
            >
              Voir plus
            </button>
          ) : (
            <button
              className="btn col-6 col-md-2"
              onClick={() => setAll(false)}
              style={{ borderColor: '#00aff9' }}
            >
              Voir moins
            </button>
          )}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Blog
