import React, { Component } from 'react';

export default class GetNotified extends Component {
  render() {
    // var height = document.documentElement.clientHeight;
    return (
      <div className='get-notified'>
        <a name='getNotified'/>
        <h3>join the waitlist and be the first to know when instore launches</h3>
        <span>
          <input placeholder='your email address' />
          <button>submit</button>
        </span>
      </div>
    );
  }
}
