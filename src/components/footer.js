import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
        <div className='footer'>
          <div className='links-wrapper'>
            <a href='/' className='link'>nav link</a>
            <a href='/' className='link'>nav link</a>
            <a href='/' className='link'>nav link</a>
            <a href='/' className='link'>nav link</a>
          </div>
          <div className='copyright'>
            this sick site be copyrighted
          </div>
        </div>
        );
    }
}