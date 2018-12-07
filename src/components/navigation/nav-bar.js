import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          logo here
        </div>
        <div className='links-wrapper'>
          <a href='/' className='link'>nav link</a>
          <a href='/' className='link'>nav link</a>
          <a href='/' className='link'>nav link</a>
          <a href='/' className='link'>nav link</a>
        </div>
        <div className='username'>
          username
        </div>
      </div>
    );
  }
}