import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Clock from './Clock';

class Home extends Component {
    render() {
    return (
        <div className='user-page'>
          <Clock />
          <div className='welcome-title'>
            <h1 className='name'>Hello {this.props.userName}!</h1>
            <h2>Welcome to the Bank of React!</h2>
            <h2>Your Account Balance: {this.props.accountBalance}</h2>
          </div>
          <div className='link-to-pages'>
            <Link to='/settings' className='links'>Home</Link>
            <Link to='/debitpage' className='links'>Debits</Link>
            <Link to='/creditpage' className='links'>Credits</Link>
          </div>
        </div>
    );
  }

}

export default Home