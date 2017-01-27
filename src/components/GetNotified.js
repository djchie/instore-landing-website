import React, { Component } from 'react';

export default class GetNotified extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    return (
      this.props.buttonDisable ?
        <div className='get-notified'>
          <a name='getNotified'/>
          <h3>Thanks for signing up for the instore waitlist!</h3>
        </div>
      :
        <div className='get-notified'>
          <a name='getNotified'/>
          <h3>Join the waitlist and be the first to know when instore launches</h3>
          <span>
            <input onChange={this.handleChange} value={this.state.email} placeholder='your email address' />
            <button disabled={this.props.buttonDisable} onClick={() => this.props.addToWaitlist(this.state.email)}>Submit</button>
          </span>
        </div>
    );
  }
}
