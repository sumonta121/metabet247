import React, { useState } from 'react';
import NavBarContainer from '../nav/navbar_container';
import GameIndexContainer from '../games/game_index_container';
import BetModalContainer from '../bet_modal/bet_modal_container';
import ScrollBarContainer from '../scroll_bar/scroll_bar_container';
import Toast from '../toast/toast';
// import checkIcon from '../../images/check.svg'
import checkIcon from '../../images/success.png'



class MainPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modalOpen: false,
      }

  }

  render() {
    var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = mm.slice(1) + '/' + dd + '/' + yyyy;

      const styles = {
        align: 'center',
        color: 'white',
        paddingTop: '250px',
        borderRadius: '5px',
        textAlign : 'center'
      };

    return (
      <div className="main">
        <div className="main-nav">
          <NavBarContainer/>
        </div>

        <div className="all-games">
          <h1 className="main-header"  style={styles} >Hi there, Welcome to XYZ Games</h1>   
        </div>
      </div>
    );
  }
}

export default MainPage;