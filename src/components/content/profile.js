import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
      return (
        <div className='profile'>
        
            <div className='profile-box'>
                <div className='profile-pic'>
                pic
                </div>
                <div className='profile-name'>
                    firstName lastName
                </div>
                <div className='profile-desc'>
                    I'm a description
                </div>
            </div>
          
            <button className='profile-button'>Follow</button>
          
        </div>
        );
    }
}