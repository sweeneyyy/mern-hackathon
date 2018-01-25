import React, { Component } from 'react';
import Listy from './test.js'

class Profile extends Component {
  render() {
    // jsx code want to use when calling variable
    return (
      <div className="container">
        <header className="header-background">
          <h1 className="header-title">To-Do List</h1>
        </header>
          <div className="left">
          <div className="q1">
          <Listy name="one" />
          <div className="clear"></div>
          </div>
          <div className="q2">
          <Listy name="two" />
          <div className="clear"></div>
        </div>
        </div>
        <div className="right">
          <div className="q3">
          <Listy name="three" />
          <div className="clear"></div>
          </div>
          <div className="q4">
          <Listy name="four" />
          <div className="clear"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Profile;
