import React, { Component } from 'react';
import Header from './Header';
import GetNotified from './GetNotified';
import styles from './styles.css';
import axios from 'axios';
import querystring from 'querystring';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDisable: false,
    };

    this.addToWaitlist = this.addToWaitlist.bind(this);
  }

  addToWaitlist(email) {
    axios.post('/signup', {
      email: email
    })
    .then((res) => {
      this.setState({
        buttonDisable: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <GetNotified buttonDisable={this.state.buttonDisable} addToWaitlist={this.addToWaitlist}/>
      </div>
    );
  }
}
