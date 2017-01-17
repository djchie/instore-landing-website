import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header'>
        <img src='https://static.pexels.com/photos/2288/city-people-street-sun.jpg'/>
        <div className='header-text'>
          <h1 className='header-title'>instore</h1>
          <h3 className='header-subtitle'>your local shopping app</h3>
          <h4 className='header-description'>instore searches nearby stores for products you need now. with product availability and pricing at your fingertips, you'll never make a wasted trip again.</h4>
          <a href='#getNotified'>join the waitlist</a>
        </div>
      </div>
    );
  }
}
