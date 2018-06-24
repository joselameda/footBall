import React, {Component} from 'react';

class Header extends Component {

  render (){
    return (
      <nav className="navbar is-dark" aria-label="main navigation">
        <div className="navbar-brand">
                  <span className="navbar-item">
                    Player Finder
                  </span>
        </div>
      </nav>
    );
  }
}

export default Header;
