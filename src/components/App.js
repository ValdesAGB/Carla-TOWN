import React from 'react'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import { createGlobalStyle } from 'styled-components'
import Galerie from '../pages/Galerie'
import APropos from '../pages/APropos'
import Accueil from '../pages/Accueil'
import Header from './Header'

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    font-family : "Montserrat";
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />

      <div className="row ">
        <Accueil />
        <APropos />
        <Galerie />
        <Blog />
        <Contact />
      </div>

      <Header />
    </React.Fragment>
  )
}

export default App
