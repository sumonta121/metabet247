import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Leftmenu = () => {

   const token = localStorage.getItem('jwtToken');
   const user_details = token ? jwt_decode(token) : null;
   const id = user_details ? user_details.id : null;
   const user_id = user_details ? user_details.user_id : null;

   const [isActive, setIsActive] = useState(false);

   const handleToggleClick = () => {
     setIsActive(!isActive);
   };
 

   const leftMenuGuard = (() => {
      if (user_id) {
         return <> 
            <li>
               <Link to={'/bet-history'}>
                  <div className="icon"><i className="icon-live"></i></div>
                  <span>Casino History</span>
               </Link>
            </li>
            <li>
               <Link to={'/transaction-history'}>
                  <div className="icon"><i className="icon-live"></i></div>
                  <span>Transaction History</span>
               </Link>
            </li>
            <li>
               <Link to={'/withdraw-list'}>
                  <div className="icon"><i className="icon-live"></i></div>
                  <span>Withdraw History</span>
               </Link>
            </li>
         </>;   
      } else {
        return <div></div>;
      }
    })();

    

  return (    
    <div className="left-site-menu">
    <div className="left-box">
       <header className="header">
          <nav className={`menu ${isActive ? 'active act' : ''}`}>
          <ul className="main-list-menu">
                <li>
                   <ul className="menu-promot menu-promot-first">
                      <li>
                         <form action="#">
                            <input type="text" placeholder="Search........." />
                            <span className="icon">
                               <i className="fas fa-magnifying-glass"></i>
                            </span>
                         </form>
                      </li>
                     
                   </ul>
                </li>
                <li>
                   <ul className="menu-promot menu-promot-bottom">
                      <li>
                        <Link to={'/'}>
                            <div className="icon">
                               <i className="icon-live"></i>
                            </div>
                            <span>
                               Fovarites
                            </span>
                         </Link>
                      </li>
                      <li>
                        <Link to={'/live-casino'}>
                            <div className="icon">
                               <i className="icon-live"></i>
                            </div>
                            <span>
                               Live Casino
                            </span>
                         </Link>
                      </li>   
                      { leftMenuGuard }                                       
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-basketball"></i>
                            </div>
                            <span>
                               Basketball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-basketball"></i>
                            </div>
                            <span>
                               eBasketball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-tennis"></i>
                            </div>
                            <span>
                               Tennis
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-etennis"></i>
                            </div>
                            <span>
                               eTennis
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-dota"></i>
                            </div>
                            <span>
                               Dota 2
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                               LOL
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-hockyball"></i>
                            </div>
                            <span>
                               Ice hockey
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-hockyman"></i>
                            </div>
                            <span>
                               eHockey
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-tabletennis"></i>
                            </div>
                            <span>
                               Table Tennis
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-volleyball"></i>
                            </div>
                            <span>
                               Volleyball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-baseball"></i>
                            </div>
                            <span>
                               Baseball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-rugby"></i>
                            </div>
                            <span>
                               Rugby
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-mma"></i>
                            </div>
                            <span>
                               MMA
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-americanball"></i>
                            </div>
                            <span>
                               American Football
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-handball"></i>
                            </div>
                            <span>
                               Handball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-rocketluage"></i>
                            </div>
                            <span>
                               Rocket League
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-boxing"></i>
                            </div>
                            <span>
                               Boxing
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-rainbow"></i>
                            </div>
                            <span>
                               Rainbow 6
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-warcraft"></i>
                            </div>
                            <span>
                               Warcraft III
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-futsal"></i>
                            </div>
                            <span>
                               Futsal
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-cricket"></i>
                            </div>
                            <span>
                               Cricket
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-sc2"></i>
                            </div>
                            <span>
                               SC 2
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-ow"></i>
                            </div>
                            <span>
                               OW
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-valor"></i>
                            </div>
                            <span>
                               Arena of Valor
                            </span>
                        </Link>
                      </li>
                   </ul>
                </li>
          </ul>
          <div  className={`hamburger ${isActive ? 'active act' : ''}`} onClick={handleToggleClick}>
             <span></span>
          </div>
          <div  className={`hamb ${isActive ? 'active act' : ''}`} onClick={handleToggleClick}>
             <span></span>
          </div>
          <div  className={`dimmer ${isActive ? 'active act' : ''}`}></div>
          </nav>
       </header>
    </div>
 </div>

  )
}

export default Leftmenu