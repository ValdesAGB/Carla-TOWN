import React from 'react'
import styled from 'styled-components'
import { HeaderContent } from '../data'

function Header() {
  const Header = styled.header`
    position: fixed;
    top: 15%;
    left: 94%;
    width: 100%;
    z-index: 9999;
    @media (max-width: 768px) {
      top: 25%;
      left: 79%;
    }
  `
  return (
    <React.Fragment>
      <Header className="py-4">
        <nav class="navbar navbar-expand-md">
          <div class="container-fluid">
            <button
              style={{ backgroundColor: '#00121c' }}
              class="navbar-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list text-white" style={{ fontSize: '2em' }}></i>
            </button>

            <div
              class="offcanvas offcanvas-start w-75"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  MENU
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="offcanvas-body rounded-0 rounded-md-5 "
                style={{ backgroundColor: '#00121c' }}
              >
                <ul className=" list-unstyled fs-1  text-center position-relative text-white p-3 ">
                  {HeaderContent.map(({ id, href, icone, text }) => (
                    <li className="nav-item my-3 " key={id}>
                      <a
                        className="nav-link d-none d-md-block"
                        href={`#${href}`}
                      >
                        <i className={` bi ${icone}`}></i>
                      </a>
                      <a
                        className="nav-link d-md-none d-block"
                        href={`#${href}`}
                      >
                        <button
                          className=" btn text-white"
                          style={{ borderColor: '#00aff9', fontSize: '0.6em' }}
                        >
                          {text.toUpperCase()}
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Header>
    </React.Fragment>
  )
}

export default Header
