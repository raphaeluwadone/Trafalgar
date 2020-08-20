import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import Main from './components/main'
import Articles from './components/articles'
import Footer from "./components/footer"
// import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <Services />
        <Main />
        <Articles/>
        <Footer />
      </React.Fragment>
    )

    
  }
}


export default App;
