import React from 'react'
import { blogElemens } from '../../data'
import BlogCard from '../../components/BlogCard'

function Blog() {
  return (
    <React.Fragment>
      <section className="py-5 row" id="blog">
        <div className="row justify-content-center mb-3 ">
          <h3 className="text-center col-12">
            MON <span style={{ color: '#00aff9' }}>BLOG</span>
          </h3>
          <hr className="text-center col-1 " />
        </div>
        <div className="row m-3">
          {blogElemens.map(({ id, cover, title, text }) => (
            <span key={id} className="col-3">
              <BlogCard id={id} cover={cover} title={title} text={text} />
            </span>
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Blog
