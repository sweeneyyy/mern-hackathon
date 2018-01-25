import React, { Component } from 'react';
import Listy from './test.js'

class Profile extends Component {
  render() {
    // jsx code want to use when calling variable
    return (
      <div className="grid">

        {/*<div className="left">*/}
        <div className="quad" id="quad-one">
        <div className="q1">
        <Listy name="one" />
        <div className="clear"></div>
        </div>
        </div>

        <div className="quad" id="quad-two">
        <div className="q2">
        <Listy name="two" />
        <div className="clear"></div>
        </div>
      </div>

      {/*</div>*/}

     {/*} <div className="right"> */}
        <div className="quad" id="quad-three">
        <div className="q3">
        <Listy name="three" />
        <div className="clear"></div>
        </div>
        </div>

        <div className="quad" id="quad-four">
        <div className="q4">
        <Listy name="four" />
        <div className="clear"></div>
        </div>
      </div>

      {/*</div>*/}

    </div>
    );
  }
}

export default Profile;
