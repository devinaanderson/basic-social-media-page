import React, { Component } from 'react';
import Navbar from './navigation/nav-bar';
import Content from './content/page-content';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}
