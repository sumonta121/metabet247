import React from 'react'

import { Link } from "react-router-dom/cjs/react-router-dom.min";
const leftmenu = () => {
  return (
    
    <div className="left-site-menu">
    <div className="left-box">
       <header className="header">
          <nav className="menu">
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
                      <li>
                         <Link  to={'/'}>
                            <div className="icon">
                               <i className="icon-home"></i>
                            </div> 
                            <span>
                               Home
                            </span>
                         </Link>
                         <Link to={'/user'} className="main-list-menu-live">
                            <div className="icon">
                               <i className="icon-live"></i>
                            </div>
                            <span>
                            PERSONAL PROFILE 
                            </span>
                         </Link>
                         <Link to={'/bet-history'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            CASINO HISTORY
                            </span>
                         </Link>
                         <Link to={'/transaction-history'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            TRANSACTION HISTORY
                            </span>
                         </Link>
                         <Link to={'/withdraw-list'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            WIHDRAW HISTORY
                            </span>
                         </Link>                       
                         <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                              SECURITY
                            </span>
                         </Link>
                         <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                              INVITE FIRENDS
                            </span>
                         </Link>
                           <Link to={'/deposit'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            DEPOSIT
                            </span>
                           </Link>
                           <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            PROMOTIONS
                            </span>
                         </Link>
                          
                           <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            P2P
                            </span>
                         </Link>
                           <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            CASIINO
                            </span>
                         </Link>
                           <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            VIP CASH BAK
                            </span>
                         </Link>
                           <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            BONUSES AND GIFTS
                            </span>
                         </Link>
                         <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            QUERY FOR ADMINSTRATOR
                            </span>
                          </Link>
                           <Link to={'/user'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                            SIGN OUT
                            </span>
                         </Link>
                         
                      </li>
                   </ul>
                </li>
               
          </ul>
          <div className="hamburger">
             <span></span>
             </div>
          <div className="hamb">
             <span></span>
             </div>
          <div className="dimmer"></div>
          </nav>
       </header>
    </div>
 </div>

  )
}

export default leftmenu