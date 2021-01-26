import React from 'react';
import Logo from '../logo.png';

const Header=(props)=>{
  return (
    <div className="row header box">
      <img className="imgss" src={Logo} alt={'logo'} height="100" width="100"/>
      <div className="cntrs">
      <div id="container">
        <div id="flip">
                <div><div>Memory{`🧠`}</div></div>
                <div><div>Play{`🎮`}</div></div>
                <div><div>Win{`🍾`}</div></div>
              </div>
            </div>
        </div>
            
      <div className="scores">
        <span>High score: {props.lastScore}</span>
        <span>Current score: {props.score}</span>
      </div>
    </div>
  );
}

export default Header;