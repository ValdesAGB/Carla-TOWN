import React from 'react'
import styled from 'styled-components'

function Header() {
  const Header = styled.header`
    position: fixed;
    top: 15%;
    left: 94%;
    width: 100%;
    z-index: 9999;
  `
  return (
    <React.Fragment>
      <Header className="py-4 ">
        <ul
          className="list-unstyled fs-1 text-end position-fixed text-white p-3 rounded-5"
          style={{ backgroundColor: '#00121c' }}
        >
          <li className="nav-item active ">
            <a className="nav-link" href="#accueil">
              <i class="bi bi-house-door-fill"></i>
            </a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="#aboutme">
              <i class="bi bi-person-circle"></i>
            </a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="#galerie">
              <i class="bi bi-images"></i>
            </a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="#blog">
              <i class="bi bi-chat-left-text"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              <i class="bi bi-telephone-fill"></i>
            </a>
          </li>
        </ul>
      </Header>
    </React.Fragment>
  )
}

export default Header
