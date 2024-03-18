
import React, { useRef } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const MainContent = () => {
    const containerRef = useRef(null);

    function handleWheel(event) {
      const container = containerRef.current;
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      container.scrollLeft -= delta * 30; // adjust scrolling speed here
    }
  return (
    <div> 
        <div className="banner-feature">
            <div className="container" ref={containerRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }} onWheel={handleWheel}>
            <div className="banner-feature-wrapper " >
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/live.svg" alt="12zfeature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Live
                    </span>
               </Link>
                <Link to="e:" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/parcents.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        0% Margin
                    </span>
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/football.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Football
                    </span>
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/tennis.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Tennis
                    </span>
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/table.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Table Tennis
                    </span>
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/basketball.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Basketball
                    </span> 
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/esport.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        eSports
                    </span>
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/promotion.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Promotions
                    </span>
               </Link>
                <Link to="#" className="banner-feature-items">
                    <span className="banner-feauter-thumb">
                        <img src="assets/img/banner-freature/cricket.svg" alt="feature" />
                    </span>
                    <span className="banner-feature-contentt">
                        Cricket
                    </span>
               </Link>
            </div>
            </div>
        </div>

        <div className="main-body-tabbing">
            <div className="container">
            <div className="main-tabbing">
                <ul className="nav">
                    <li className="nav-item">
                    <Link className="nav-link link-secondary active" id="all-tab" data-bs-toggle="tab" data-bs-target="#betsall" to="#"><span>All</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab01" data-bs-toggle="tab" data-bs-target="#combo01" to="#"><span>Live</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab02" data-bs-toggle="tab" data-bs-target="#combo02" to="#"><span>Today</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab03" data-bs-toggle="tab" data-bs-target="#combo03" to="#"><span>Tomorrow</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab04" data-bs-toggle="tab" data-bs-target="#combo04" to="#"><span>1h</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab05" data-bs-toggle="tab" data-bs-target="#combo05" to="#"><span>3h</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab06" data-bs-toggle="tab" data-bs-target="#combo06" to="#"><span>6h</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab07" data-bs-toggle="tab" data-bs-target="#combo07" to="#"><span>12h</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab08" data-bs-toggle="tab" data-bs-target="#combo08" to="#"><span>24h</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-secondary" id="combo-tab09" data-bs-toggle="tab" data-bs-target="#combo09" to="#"><span>Calender</span></Link>
                    </li>
                </ul>
                <div className="tab-content" id="tabContentmain">
                
                    <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="progress-slider owl-theme owl-carousel">
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        </div>
                    
                        <div className="match-table pt-60">
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>ukraine</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>

                               
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>ONLINE CASINO</h2> 
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div >
                                  <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-home-casino-blackjack-lg.webp" />
                                  <span>Blackjack</span>
                                </div> 
                                <div className="">
                                  <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-home-casino-slots-lg.webp" />
                                  <span>slots</span>
                                </div> 
                                <div className="">
                                  <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-home-casino-live-dealer-lg.webp" />
                                  <span>Live Dealer</span>
                                </div> 
                                <div className="">
                                  <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-home-casino-table-games-lg.webp" />
                                  <span>Table Games</span>
                                </div> 
                                                              
                            </div>
                        </div>

                        <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                            <span>Croatia</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                             
                       

                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div >
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-college-football.webp" />
                                   <span>College Football</span>
                                </div> 
                                <div className="">
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-soccer.webp" />
                                     <span>Soccer </span>
                                </div> 
                                <div className="">
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-baseball.webp" />
                                     <span>Baseball </span>
                                </div> 
                                <div className="">
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-basket.webp" />
                                   <span>Basket </span>
                                </div> 
                                <div className="">
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-horses.webp" />
                                    <span>Horses </span>
                                </div> 
                                <div className="">
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-esports.webp" />
                                   <span>eSports </span>
                                </div> 
                                 <div className="">
                                   <img src="https://a.betuscdn.com/sites/betus/home/img/202111/betus-slider-hockey.webp" />
                                   <span>Hockey </span>
                                </div> 
                                 <div className="">
                                   <img src="https://nx.betuscdn.com/img/homePage/20230224/betus-slider-ncaab.webp" />
                                   <span>ncaab </span>  
                                </div>  
                                <div className="">
                                   <img src="https://nx.betuscdn.com/img/20220801/betus-slider-ufc.webp" />
                                   <span>ufc </span>  
                                </div>                                 
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                Basketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 21:30
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Swans Gmunden</span>
                                            <span className="icon">
                                                <img src="assets/img/table/swans.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/parnu.png" alt="plag" />
                                            </span>
                                            <span>KK Parnu</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 75.5</span>
                                        <span>1.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 75.5</span>
                                        <span>1.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>BK Levickí Patrioti</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lion.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/kormend.png" alt="flag" />
                                            </span>
                                            <span>Kormend</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 75.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 75.5</span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+62</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Leicester Riders</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lion.png" alt="flat" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/kormend.png" alt="flag" />
                                            </span>
                                            <span>Voluntari</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="https://www.youtube.com/watch?v=Qg6zu49kXSA" className="table-pointing-box video-btn">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                Tennis
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="flag" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Set 1
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/solder.png" alt="flag" />
                                                </span>
                                                <span>Samsonova Ludmilla</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/king.png" alt="plag" />
                                                </span>
                                                <span>Wang Xinyu</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">0</span>  S1 GP</Link>
                                        <Link to="#0">40</Link>
                                        <Link to="#0"><span className="blods">0</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.17</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>4.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>1.91</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="batbinton">
                                            <img src="assets/img/table/batbintonplay.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 16m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Wickmayer Yanina</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ninja.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/skill.png" alt="flag" />
                                            </span>
                                            <span>Raducanu Emma</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+39</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 16m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Kudermetova Veronika</span>
                                            <span className="icon">
                                                <img src="assets/img/table/teab.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/team2.png" alt="flag" />
                                            </span>
                                            <span>Conteras Gomez Fernanda</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>08.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>23.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>4.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>1.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+40</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 16m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Ostapenko Jelena</span>
                                            <span className="icon">
                                                <img src="assets/img/table/team3.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/team4.png" alt="flag" />
                                            </span>
                                            <span>Gasanova Anastasia</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>3.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>54.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>02.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>5.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+58</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                Dota 2
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        Dota 2. BTS Pro Series SEA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 39m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total. Map 1
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/dotaflag1.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/dotaflag2.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>8.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>15.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 24.5</span>
                                        <span>0.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 23.5</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+31</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/dota2.png" alt="icon" />
                                    </span>
                                    <span>
                                        Dota 2. European Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 17:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>No Bounty Hunter</span>
                                            <span className="icon">
                                                <img src="assets/img/table/hunter.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ivy.png" alt="flag" />
                                            </span>
                                            <span>iVy</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>78.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>53.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 42.5</span>
                                        <span>8.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 72.5</span>
                                        <span>7.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+13</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        Dota 2. BTS Pro Series SEA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 17:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Execration</span>
                                            <span className="icon">
                                                <img src="assets/img/table/execration.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/neon.png" alt="flag" />
                                            </span>
                                            <span>Neon Esports</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>1.14</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 55.5</span>
                                        <span>08.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 55.5</span>
                                        <span>01.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+23</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                League of Legends
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        League of Legends. European Masters
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 - 21:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>LDLC OL</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ol.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/hereti.png" alt="flag" />
                                            </span>
                                            <span>Heretics</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.40</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+14</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        League of Legends. Asia Star Challengers
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 6m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>FunPlus Phoenix Blaze</span>
                                            <span className="icon">
                                                <img src="assets/img/table/blaze.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/gaming.png" alt="flag" />
                                            </span>
                                            <span>EDward Gaming Youth</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.21</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 20.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+39</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        League of Legends. LVP SuperLiga                                       
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 23 - 22:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Execration</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lumber.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/with.png" alt="flag" />
                                            </span>
                                            <span>Neon Esports</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>1.14</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 55.5</span>
                                        <span>08.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 55.5</span>
                                        <span>01.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+23</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                Ice Hockey
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        KHL
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Sibir Novosibirsk</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ol.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/hereti.png" alt="flag" />
                                            </span>
                                            <span>Avtomobilist Yekaterinburg</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.81</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.24</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.22</span>
                                        <span>1.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 1.60</span>
                                        <span>2.40</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+98</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        KHL
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Kunlun Red Star </span>
                                            <span className="icon">
                                                <img src="assets/img/table/blaze.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/gaming.png" alt="flag" />
                                            </span>
                                            <span>SKA St. Petersburg</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>7.32</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.81</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.24</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 5</span>
                                        <span>1.99</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 5</span>
                                        <span>1.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+98</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        KHL                                   
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Severstal</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lumber.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/with.png" alt="flag" />
                                            </span>
                                            <span>Dynamo Moskva</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.76</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 4.5</span>
                                        <span>3.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 4.5</span>
                                        <span>1.79</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+95</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                MMA
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        Mixed Martial Arts. Bellator
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>LDLC OL</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ol.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/hereti.png" alt="flag" />
                                            </span>
                                            <span>Heretics</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+14</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        Mixed Martial Arts. Bellator
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 23 - 23:00
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>FunPlus Phoenix Blaze</span>
                                            <span className="icon">
                                                <img src="assets/img/table/blaze.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/gaming.png" alt="flag" />
                                            </span>
                                            <span>EDward Gaming Youth</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.21</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 20.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+39</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        Mixed Martial Arts. Bellator                                    
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 23 - 23:00
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Execration</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lumber.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/with.png" alt="flag" />
                                            </span>
                                            <span>Neon Esports</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>1.14</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 55.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 55.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+23</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                

                
                    <div className="tab-pane fade" id="combo01" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Countries
                        </h2>
                        </div>
                        <div className="countries-tab pb-60">
                        <div className="accordion" id="countries">
                            <div className="accordion-item">
                            <div className="accordion-header" id="countriestab1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries1" aria-expanded="false" aria-controls="countries1">
                                    <span className="icon"><img src="assets/img/table/china.png" alt="china" /></span>
                                    <span>China</span>
                                </button>
                                <div id="countries1" className="accordion-collapse collapse" data-bs-parent="#countries">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>WHL</span>
                                   </Link>
                                    <Link to="#0">
                                        1 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries2" aria-expanded="false" aria-controls="countries2">
                                    <span className="icon"><img src="assets/img/table/mexico.png" alt="china" /></span>
                                    <span>Mexico</span>
                                </button>
                                <div id="countries2" className="accordion-collapse collapse" data-bs-parent="#countries">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>WHL</span>
                                   </Link>
                                    <Link to="#0">
                                        1 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries3" aria-expanded="false" aria-controls="countries3">
                                    <span className="icon"><img src="assets/img/table/canada.png" alt="china" /></span>
                                    <span>Canada</span>
                                </button>
                                <div id="countries3" className="accordion-collapse collapse" data-bs-parent="#countries">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>WHL</span>
                                   </Link>
                                    <Link to="#0">
                                        1 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries4" aria-expanded="false" aria-controls="countries4">
                                    <span className="icon"><i className="icon-football"></i></span>
                                    <span> FIFA eSports </span>
                                </button>
                                <div id="countries4" className="accordion-collapse collapse" data-bs-parent="#countries">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>WHL</span>
                                   </Link>
                                    <Link to="#0">
                                        1 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    
                        <div className="progress-slider owl-theme owl-carousel">
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/croatia.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>38<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Croatia</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/denmark.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Denmark</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        <div className="progress-slider-items">
                            <div className="title">
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="text">
                                    League Nations UEFA
                                </span>
                            </div>
                            <div className="main-progress-wrap">
                                <div className="cart-item">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/italy.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>65<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Italy</span>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-item cart-middle-item">
                                    <div className="card myborder">
                                    <div className="percent">
                                        <div className="pro1">
                                            <div className="pro2">
                                                <div className="pro3">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area middle-bg">
                                            <div className="icon">
                                                <span className="vs">Vs</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="cart-items">
                                    <div className="card">
                                    <div className="percent">
                                    <svg>
                                        <circle cx="55" cy="55" r="45"></circle>
                                        <circle cx="55" cy="55" r="45" style={{ '--percent': '28%' }}></circle>
                                    </svg>
                                    <div className="content-area">
                                        <div className="icon">
                                            <img src="assets/img/table/scotland.png" alt="flag" />
                                        </div>
                                        <div className="number">
                                            <h3>28<span>%</span></h3>
                                        </div>
                                        <div className="title">
                                            <span>Scotland</span>
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="match-pointing">
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">1</span>
                                    <span>3.55</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">X</span>
                                    <span>4.25</span>
                               </Link>
                                <Link to="#0" className="match-pointing-box">
                                    <span className="list">2</span>
                                    <span>5.05</span>
                               </Link>
                            </div>
                        </div>
                        </div>
                    
                        <div className="match-table pt-60">
                    
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>Scotland</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/wales.png" alt="flag" />
                                            </span>
                                            <span>Wales</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                Basketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 21:30
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Swans Gmunden</span>
                                            <span className="icon">
                                                <img src="assets/img/table/swans.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/parnu.png" alt="plag" />
                                            </span>
                                            <span>KK Parnu</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 75.5</span>
                                        <span>1.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 75.5</span>
                                        <span>1.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>BK Levickí Patrioti</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lion.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/kormend.png" alt="flag" />
                                            </span>
                                            <span>Kormend</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 75.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 75.5</span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+62</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Leicester Riders</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lion.png" alt="flat" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/kormend.png" alt="flag" />
                                            </span>
                                            <span>Voluntari</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                Tennis
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="flag" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Set 1
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/solder.png" alt="flag" />
                                                </span>
                                                <span>Samsonova Ludmilla</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/king.png" alt="plag" />
                                                </span>
                                                <span>Wang Xinyu</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">0</span>  S1 GP</Link>
                                        <Link to="#0">40</Link>
                                        <Link to="#0"><span className="blods">0</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.17</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>4.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>1.91</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="batbinton">
                                            <img src="assets/img/table/batbintonplay.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 16m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Wickmayer Yanina</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ninja.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/skill.png" alt="flag" />
                                            </span>
                                            <span>Raducanu Emma</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+39</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 16m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Kudermetova Veronika</span>
                                            <span className="icon">
                                                <img src="assets/img/table/teab.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/team2.png" alt="flag" />
                                            </span>
                                            <span>Conteras Gomez Fernanda</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>08.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>23.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>4.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>1.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+40</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        WTA Tokyo
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 16m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Ostapenko Jelena</span>
                                            <span className="icon">
                                                <img src="assets/img/table/team3.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/team4.png" alt="flag" />
                                            </span>
                                            <span>Gasanova Anastasia</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>3.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>54.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>02.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 22.5</span>
                                        <span>5.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+58</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                Dota 2
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        Dota 2. BTS Pro Series SEA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 39m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total. Map 1
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/dotaflag1.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/dotaflag2.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>8.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>15.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 24.5</span>
                                        <span>0.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 23.5</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+31</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/dota2.png" alt="icon" />
                                    </span>
                                    <span>
                                        Dota 2. European Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 17:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>No Bounty Hunter</span>
                                            <span className="icon">
                                                <img src="assets/img/table/hunter.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ivy.png" alt="flag" />
                                            </span>
                                            <span>iVy</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>78.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>53.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 42.5</span>
                                        <span>8.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 72.5</span>
                                        <span>7.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+13</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        Dota 2. BTS Pro Series SEA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 17:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Execration</span>
                                            <span className="icon">
                                                <img src="assets/img/table/execration.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/neon.png" alt="flag" />
                                            </span>
                                            <span>Neon Esports</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>1.14</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 55.5</span>
                                        <span>08.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 55.5</span>
                                        <span>01.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+23</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                League of Legends
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        League of Legends. European Masters
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 - 21:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>LDLC OL</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ol.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/hereti.png" alt="flag" />
                                            </span>
                                            <span>Heretics</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.40</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+14</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/wta.png" alt="icon" />
                                    </span>
                                    <span>
                                        League of Legends. Asia Star Challengers
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 6m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>FunPlus Phoenix Blaze</span>
                                            <span className="icon">
                                                <img src="assets/img/table/blaze.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/gaming.png" alt="flag" />
                                            </span>
                                            <span>EDward Gaming Youth</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.21</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 20.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+39</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/bts.png" alt="icon" />
                                    </span>
                                    <span>
                                        League of Legends. LVP SuperLiga                                       
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 23 - 22:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Execration</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lumber.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/with.png" alt="flag" />
                                            </span>
                                            <span>Neon Esports</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>1.14</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 55.5</span>
                                        <span>08.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 55.5</span>
                                        <span>01.01</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+23</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                Ice Hockey
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        KHL
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Sibir Novosibirsk</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ol.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/hereti.png" alt="flag" />
                                            </span>
                                            <span>Avtomobilist Yekaterinburg</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.81</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.24</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.22</span>
                                        <span>1.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 1.60</span>
                                        <span>2.40</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+98</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        KHL
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Kunlun Red Star </span>
                                            <span className="icon">
                                                <img src="assets/img/table/blaze.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/gaming.png" alt="flag" />
                                            </span>
                                            <span>SKA St. Petersburg</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>7.32</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.81</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.24</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 5</span>
                                        <span>1.99</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 5</span>
                                        <span>1.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+98</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        KHL                                   
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Severstal</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lumber.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/with.png" alt="flag" />
                                            </span>
                                            <span>Dynamo Moskva</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.76</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 4.5</span>
                                        <span>3.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 4.5</span>
                                        <span>1.79</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+95</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                MMA
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        Mixed Martial Arts. Bellator
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 22 18:30
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>LDLC OL</span>
                                            <span className="icon">
                                                <img src="assets/img/table/ol.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/hereti.png" alt="flag" />
                                            </span>
                                            <span>Heretics</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>3.46</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+14</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        Mixed Martial Arts. Bellator
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 23 - 23:00
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>FunPlus Phoenix Blaze</span>
                                            <span className="icon">
                                                <img src="assets/img/table/blaze.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/gaming.png" alt="flag" />
                                            </span>
                                            <span>EDward Gaming Youth</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.21</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 22.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 20.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+39</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/klh.png" alt="icon" />
                                    </span>
                                    <span>
                                        Mixed Martial Arts. Bellator                                    
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 23 - 23:00
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total maps
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Execration</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lumber.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/with.png" alt="flag" />
                                            </span>
                                            <span>Neon Esports</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>1.14</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 55.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 55.5</span>
                                        <span>----</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+23</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="combo02" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Top Leagues
                        </h2>
                        </div>
                        <div className="leauge-name d-flex align-items-center justify-content-between">
                        <Link to="#0" className="left-countries">
                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                        <span> Europe - UEFA Nations League </span>
                       </Link>
                        <Link to="#0">
                        3 <i className="fas fa-angle-right"></i>
                       </Link>
                        </div>
                        <div className="head-title-two">
                        <h3>
                            Countries
                        </h3>
                        </div>
                        <div className="countries-tab pb-60">
                        <div className="accordion" id="countriestoday">
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries5" aria-expanded="false" aria-controls="countries5">
                                    <span className="icon"><img src="assets/img/table/algeria.png" alt="china" /></span>
                                    <span>Algeria</span>
                                    </button>
                                    <div id="countries5" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab6">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries6" aria-expanded="false" aria-controls="countries6">
                                    <span className="icon"><img src="assets/img/table/argentina.png" alt="china" /></span>
                                    <span> Argentina </span>
                                    </button>
                                    <div id="countries6" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab0077">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries0077" aria-expanded="false" aria-controls="countries0077">
                                    <span className="icon"><img src="assets/img/table/australia.png" alt="china" /></span>
                                    <span>Australia</span>
                                    </button>
                                    <div id="countries0077" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab8">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries8" aria-expanded="false" aria-controls="countries8">
                                    <span className="icon"><img src="assets/img/table/bahrain.png" alt="img" /></span>
                                    <span> Bahrain </span>
                                    </button>
                                    <div id="countries8" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab9">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries9" aria-expanded="false" aria-controls="countries9">
                                    <span className="icon"><img src="assets/img/table/austria.png" alt="img" /></span>
                                    <span>  Austria  </span>
                                    </button>
                                    <div id="countries9" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab10">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries10" aria-expanded="false" aria-controls="countries10">
                                    <span className="icon"><img src="assets/img/table/israel.png" alt="img" /></span>
                                    <span>  Israel   </span>
                                    </button>
                                    <div id="countries10" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab11">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries11" aria-expanded="false" aria-controls="countries11">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="img" /></span>
                                    <span>   Belgium    </span>
                                    </button>
                                    <div id="countries11" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab12">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries12" aria-expanded="false" aria-controls="countries12">
                                    <span className="icon"><img src="assets/img/table/bolivia.png" alt="img" /></span>
                                    <span>    Bolivia     </span>
                                    </button>
                                    <div id="countries12" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab13">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries13" aria-expanded="false" aria-controls="countries13">
                                    <span className="icon"><img src="assets/img/table/bosnia.png" alt="img" /></span>
                                    <span> Bosnia & Herzegovina </span>
                                    </button>
                                    <div id="countries13" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab14">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries14" aria-expanded="false" aria-controls="countries14">
                                    <span className="icon"><img src="assets/img/table/brazil.png" alt="img" /></span>
                                    <span> Brazil </span>
                                    </button>
                                    <div id="countries14" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab15">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries15" aria-expanded="false" aria-controls="countries15">
                                    <span className="icon"><img src="assets/img/table/burkina.png" alt="img" /></span>
                                    <span> Burkina Faso </span>
                                    </button>
                                    <div id="countries15" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab16">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries16" aria-expanded="false" aria-controls="countries16">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="img" /></span>
                                    <span> Japan </span>
                                    </button>
                                    <div id="countries16" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab17">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries17" aria-expanded="false" aria-controls="countries17">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="img" /></span>
                                    <span> Czech Republic </span>
                                    </button>
                                    <div id="countries17" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab18">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries18" aria-expanded="false" aria-controls="countries18">
                                    <span className="icon"><img src="assets/img/table/finland.png" alt="img" /></span>
                                    <span> Finland </span>
                                    </button>
                                    <div id="countries18" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    

                        <div className="match-table">
                    
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>Scotland</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/wales.png" alt="flag" />
                                            </span>
                                            <span>Wales</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                Basketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 21:30
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Swans Gmunden</span>
                                            <span className="icon">
                                                <img src="assets/img/table/swans.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/parnu.png" alt="plag" />
                                            </span>
                                            <span>KK Parnu</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 75.5</span>
                                        <span>1.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 75.5</span>
                                        <span>1.82</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>BK Levickí Patrioti</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lion.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/kormend.png" alt="flag" />
                                            </span>
                                            <span>Kormend</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 75.5</span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 75.5</span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+62</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/c-league.png" alt="icon" />
                                    </span>
                                    <span>
                                        Champions League FIBA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Leicester Riders</span>
                                            <span className="icon">
                                                <img src="assets/img/table/lion.png" alt="flat" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/kormend.png" alt="flag" />
                                            </span>
                                            <span>Voluntari</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="combo03" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Top Leagues
                        </h2>
                        </div>
                        <div className="leauge-name d-flex align-items-center justify-content-between">
                        <Link to="#0" className="left-countries">
                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                        <span> Europe - UEFA Nations League </span>
                       </Link>
                        <Link to="#0">
                        10 <i className="fas fa-angle-right"></i>
                       </Link>
                        </div>
                        <div className="head-title-two">
                        <h3>
                        Countries
                        </h3>
                        </div>
                        <div className="countries-tab">
                        <div className="accordion" id="countriestmorrow">
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab19">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries19" aria-expanded="false" aria-controls="countries19">
                                    <span className="icon"><img src="assets/img/table/angola.png" alt="china" /></span>
                                    <span>Angola</span>
                                    </button>
                                    <div id="countries19" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab20">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries20" aria-expanded="false" aria-controls="countries20">
                                    <span className="icon"><img src="assets/img/table/argentina.png" alt="china" /></span>
                                    <span> Argentina </span>
                                    </button>
                                    <div id="countries20" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab077">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries077" aria-expanded="false" aria-controls="countries077">
                                    <span className="icon"><img src="assets/img/table/aruba.png" alt="china" /></span>
                                    <span>Aruba</span>
                                    </button>
                                    <div id="countries077" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab28">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries28" aria-expanded="false" aria-controls="countries28">
                                    <span className="icon"><img src="assets/img/table/brazil.png" alt="img" /></span>
                                    <span> Brazil </span>
                                    </button>
                                    <div id="countries28" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab22">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries22" aria-expanded="false" aria-controls="countries22">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="img" /></span>
                                    <span> Europe </span>
                                    </button>
                                    <div id="countries22" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab30">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries30" aria-expanded="false" aria-controls="countries30">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="img" /></span>
                                    <span> Japan </span>
                                    </button>
                                    <div id="countries30" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab23">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries23" aria-expanded="false" aria-controls="countries23">
                                    <span className="icon"><img src="assets/img/table/austria.png" alt="img" /></span>
                                    <span>  Austria  </span>
                                    </button>
                                    <div id="countries23" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab27">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries27" aria-expanded="false" aria-controls="countries27">
                                    <span className="icon"><img src="assets/img/table/bosnia.png" alt="img" /></span>
                                    <span> Bosnia & Herzegovina </span>
                                    </button>
                                    <div id="countries27" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab26">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries26" aria-expanded="false" aria-controls="countries26">
                                    <span className="icon"><img src="assets/img/table/bolivia.png" alt="img" /></span>
                                    <span>    Bolivia     </span>
                                    </button>
                                    <div id="countries26" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab24">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries24" aria-expanded="false" aria-controls="countries24">
                                    <span className="icon"><img src="assets/img/table/israel.png" alt="img" /></span>
                                    <span>  Israel   </span>
                                    </button>
                                    <div id="countries24" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab32">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries32" aria-expanded="false" aria-controls="countries32">
                                    <span className="icon"><img src="assets/img/table/finland.png" alt="img" /></span>
                                    <span> Finland </span>
                                    </button>
                                    <div id="countries32" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab31">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries31" aria-expanded="false" aria-controls="countries31">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="img" /></span>
                                    <span> Czech Republic </span>
                                    </button>
                                    <div id="countries31" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab25">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries25" aria-expanded="false" aria-controls="countries25">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="img" /></span>
                                    <span>   Belgium    </span>
                                    </button>
                                    <div id="countries25" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab29">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries29" aria-expanded="false" aria-controls="countries29">
                                    <span className="icon"><img src="assets/img/table/burkina.png" alt="img" /></span>
                                    <span> Burkina Faso </span>
                                    </button>
                                    <div id="countries29" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab33">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries33" aria-expanded="false" aria-controls="countries33">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="img" /></span>
                                    <span>Paraguay</span>
                                    </button>
                                    <div id="countries33" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab34">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries34" aria-expanded="false" aria-controls="countries34">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="img" /></span>
                                    <span> Panama </span>
                                    </button>
                                    <div id="countries34" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    

                        <div className="match-table pt-60">
                    
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>Scotland</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/wales.png" alt="flag" />
                                            </span>
                                            <span>Wales</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="combo04" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Countries
                        </h2>
                        </div>
                        <div className="countries-tab">
                        <div className="accordion" id="countries1h">
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab40">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries40" aria-expanded="false" aria-controls="countries40">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span>Japan</span>
                                    </button>
                                    <div id="countries40" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab39">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries39" aria-expanded="false" aria-controls="countries39">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                    </button>
                                    <div id="countries39" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab41">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries41" aria-expanded="false" aria-controls="countries41">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span>Belgium</span>
                                    </button>
                                    <div id="countries41" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab42">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries42" aria-expanded="false" aria-controls="countries42">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="img" /></span>
                                    <span> Panama </span>
                                    </button>
                                    <div id="countries42" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    

                        <div className="match-table pt-60">
                    
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>Scotland</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/wales.png" alt="flag" />
                                            </span>
                                            <span>Wales</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="details.ht#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="details.ht#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="combo05" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Countries
                        </h2>
                        </div>
                        <div className="countries-tab">
                        <div className="accordion" id="countries3h">
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab50">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries45" aria-expanded="false" aria-controls="countries45">
                                    <span className="icon"><img src="assets/img/table/algeria.png" alt="china" /></span>
                                    <span>Algeria</span>
                                    </button>
                                    <div id="countries45" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab51">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries46" aria-expanded="false" aria-controls="countries46">
                                    <span className="icon"><img src="assets/img/table/australia.png" alt="china" /></span>
                                    <span>  Australia  </span>
                                    </button>
                                    <div id="countries46" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab52">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries47" aria-expanded="false" aria-controls="countries47">
                                    <span className="icon"><img src="assets/img/table/china.png" alt="china" /></span>
                                    <span>China</span>
                                    </button>
                                    <div id="countries47" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab53">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries48" aria-expanded="false" aria-controls="countries48">
                                    <span className="icon"><img src="assets/img/table/india.png" alt="img" /></span>
                                    <span> India </span>
                                    </button>
                                    <div id="countries48" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab54">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries54" aria-expanded="false" aria-controls="countries54">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="img" /></span>
                                    <span> Czech Republic </span>
                                    </button>
                                    <div id="countries54" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab55">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries55" aria-expanded="false" aria-controls="countries55">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="img" /></span>
                                    <span> Belgium </span>
                                    </button>
                                    <div id="countries55" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab56">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries56" aria-expanded="false" aria-controls="countries56">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="img" /></span>
                                    <span> Europe </span>
                                    </button>
                                    <div id="countries56" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab57">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries57" aria-expanded="false" aria-controls="countries57">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="img" /></span>
                                    <span> Paraguay</span>
                                    </button>
                                    <div id="countries57" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab58">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries58" aria-expanded="false" aria-controls="countries58">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="img" /></span>
                                    <span> Panama</span>
                                    </button>
                                    <div id="countries58" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                            3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    

                        <div className="match-table pt-60">
                    
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>Scotland</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/wales.png" alt="flag" />
                                            </span>
                                            <span>Wales</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="combo06" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Countries
                        </h2>
                        </div>
                        <div className="countries-tab">
                        <div className="accordion" id="countries6h">
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab61">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries61" aria-expanded="false" aria-controls="countries61">
                                    <span className="icon"><img src="assets/img/table/aruba.png" alt="china" /></span>
                                    <span>Aruba</span>
                                    </button>
                                    <div id="countries61" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab62">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries62" aria-expanded="false" aria-controls="countries62">
                                    <span className="icon"><img src="assets/img/table/china.png" alt="china" /></span>
                                    <span>China</span>
                                    </button>
                                    <div id="countries62" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab63">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries63" aria-expanded="false" aria-controls="countries63">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span>Japan</span>
                                    </button>
                                    <div id="countries63" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab64">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries64" aria-expanded="false" aria-controls="countries64">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span>Belgium</span>
                                    </button>
                                    <div id="countries64" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab65">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries65" aria-expanded="false" aria-controls="countries65">
                                    <span className="icon"><img src="assets/img/table/angola.png" alt="china" /></span>
                                    <span>Angola</span>
                                    </button>
                                    <div id="countries65" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab66">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries66" aria-expanded="false" aria-controls="countries66">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                    </button>
                                    <div id="countries66" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab67">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries67" aria-expanded="false" aria-controls="countries67">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span>Paraguay</span>
                                    </button>
                                    <div id="countries67" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab68">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries68" aria-expanded="false" aria-controls="countries68">
                                    <span className="icon"><img src="assets/img/table/australia.png" alt="china" /></span>
                                    <span>Australia</span>
                                    </button>
                                    <div id="countries68" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab71">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries71" aria-expanded="false" aria-controls="countries71">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span>Europe</span>
                                    </button>
                                    <div id="countries71" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab73">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries73" aria-expanded="false" aria-controls="countries73">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span>Czech Republic</span>
                                    </button>
                                    <div id="countries73" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab74">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries74" aria-expanded="false" aria-controls="countries74">
                                    <span className="icon"><img src="assets/img/table/india.png" alt="china" /></span>
                                    <span>India</span>
                                    </button>
                                    <div id="countries74" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab75">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries75" aria-expanded="false" aria-controls="countries75">
                                    <span className="icon"><img src="assets/img/table/brazil.png" alt="china" /></span>
                                    <span>Brazil</span>
                                    </button>
                                    <div id="countries75" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab76">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries76" aria-expanded="false" aria-controls="countries76">
                                    <span className="icon"><img src="assets/img/table/austria.png" alt="china" /></span>
                                    <span>Austria</span>
                                    </button>
                                    <div id="countries76" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab77">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries77s" aria-expanded="false" aria-controls="countries77s">
                                    <span className="icon"><img src="assets/img/table/algeria.png" alt="china" /></span>
                                    <span>Algeria</span>
                                    </button>
                                    <div id="countries77s" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab78">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries78" aria-expanded="false" aria-controls="countries78">
                                    <span className="icon"><img src="assets/img/table/bosnia.png" alt="china" /></span>
                                    <span>Bosina & Herzegovina</span>
                                    </button>
                                    <div id="countries78" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab79">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries79" aria-expanded="false" aria-controls="countries79">
                                    <span className="icon"><img src="assets/img/table/argentina.png" alt="china" /></span>
                                    <span>Argentina</span>
                                    </button>
                                    <div id="countries79" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab80">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries80" aria-expanded="false" aria-controls="countries80">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span>Paraguay</span>
                                    </button>
                                    <div id="countries80" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab81">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries81" aria-expanded="false" aria-controls="countries81">
                                    <span className="icon"><img src="assets/img/table/israel.png" alt="china" /></span>
                                    <span>Israel</span>
                                    </button>
                                    <div id="countries81" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab82">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries82" aria-expanded="false" aria-controls="countries82">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                    </button>
                                    <div id="countries82" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab83">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries83" aria-expanded="false" aria-controls="countries83">
                                    <span className="icon"><img src="assets/img/table/finland.png" alt="china" /></span>
                                    <span>Finland</span>
                                    </button>
                                    <div id="countries83" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab84">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries84" aria-expanded="false" aria-controls="countries84">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span>Czech Republic</span>
                                    </button>
                                    <div id="countries84" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab85">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries85" aria-expanded="false" aria-controls="countries85">
                                    <span className="icon"><img src="assets/img/table/bolivia.png" alt="china" /></span>
                                    <span>Bolivia</span>
                                    </button>
                                    <div id="countries85" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab86">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries86" aria-expanded="false" aria-controls="countries86">
                                    <span className="icon"><img src="assets/img/table/burkina.png" alt="china" /></span>
                                    <span>Burkina Faso</span>
                                    </button>
                                    <div id="countries86" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="countriestab87">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries87" aria-expanded="false" aria-controls="countries87">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span>Belgium</span>
                                    </button>
                                    <div id="countries87" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe-UEFA Nations</span>
                                       </Link>
                                        <Link to="#0">
                                        3 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        </div>
                    

                        <div className="match-table pt-60">
                    
                        <div className="match-table-head pt-spane-none">
                            <h2>
                                Football
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Scotland</span>
                                            <span className="icon">
                                                <img src="assets/img/table/scotland.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/ukraine.png" alt="flag" />
                                            </span>
                                            <span>Scotland</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.08</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+327</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Belgium</span>
                                            <span className="icon">
                                                <img src="assets/img/table/belgium.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/wales.png" alt="flag" />
                                            </span>
                                            <span>Wales</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.39</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>8.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        League Nations UEFA
                                    </span>
                                    <span>
                                        <img src="assets/img/table/hot.png" alt="icon" />
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Croatia</span>
                                            <span className="icon">
                                                <img src="assets/img/table/croatia.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/denmark.png" alt="flag" />
                                            </span>
                                            <span>Denmark</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>5.05</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.18</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.58</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+321</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head">
                            <h2>
                                eFootball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Manchester City (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester United (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.37</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>4.60</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>1.65</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Arsenal (Virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Liverpool (virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>0 3.5</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.20</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 3.5</span>
                                        <span>2.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+22</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/l-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberfootball. FIFA. Virtual eComp. Premier League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Chelsea (virtual_1)</span>
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <i className="icon-football"></i>
                                            </span>
                                            <span>Manchester City (Virtual_2)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.75</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>2.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>2.55</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+32</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="tab-pane fade" id="combo07" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Top Leagues
                        </h2>
                        </div>
                        <div className="leauge-name d-flex align-items-center justify-content-between">
                        <Link to="#0" className="left-countries">
                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                        <span> Europe - UEFA Nations League </span>
                       </Link>
                        <Link to="#0">
                        9 <i className="fas fa-angle-right"></i>
                       </Link>
                        </div>
                        <div className="head-title-two">
                        <h3>
                            Countries
                        </h3>
                        </div>
                        <div className="countries-tab pb-60">
                        <div className="accordion" id="countries12h">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta" aria-expanded="false" aria-controls="s12ghonta">
                                    <span className="icon"><img src="assets/img/table/bosnia.png" alt="china" /></span>
                                    <span> Bosnia & Herzegovina </span>
                                </button>
                                <div id="s12ghonta" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta2" aria-expanded="false" aria-controls="s12ghonta2">
                                    <span className="icon"><img src="assets/img/table/china.png" alt="china" /></span>
                                    <span>China</span>
                                </button>
                                <div id="s12ghonta2" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta3" aria-expanded="false" aria-controls="s12ghonta3">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span>Japan</span>
                                </button>
                                <div id="s12ghonta3" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta04" aria-expanded="false" aria-controls="s12ghonta04">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span>Paraguay</span>
                                </button>
                                <div id="s12ghonta04" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta4" aria-expanded="false" aria-controls="s12ghonta4">
                                    <span className="icon"><img src="assets/img/table/bolivia.png" alt="china" /></span>
                                    <span>Bolivia</span>
                                </button>
                                <div id="s12ghonta4" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta5" aria-expanded="false" aria-controls="s12ghonta5">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                </button>
                                <div id="s12ghonta5" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta7" aria-expanded="false" aria-controls="s12ghonta7">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span>Belgium</span>
                                </button>
                                <div id="s12ghonta7" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta8" aria-expanded="false" aria-controls="s12ghonta8">
                                    <span className="icon"><img src="assets/img/table/angola.png" alt="china" /></span>
                                    <span>Angola</span>
                                </button>
                                <div id="s12ghonta8" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta9" aria-expanded="false" aria-controls="s12ghonta9">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                </button>
                                <div id="s12ghonta9" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta10" aria-expanded="false" aria-controls="s12ghonta10">
                                    <span className="icon"><img src="assets/img/table/australia.png" alt="china" /></span>
                                    <span> Australia </span>
                                </button>
                                <div id="s12ghonta10" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta11" aria-expanded="false" aria-controls="s12ghonta11">
                                    <span className="icon"><img src="assets/img/table/israel.png" alt="china" /></span>
                                    <span> Israel </span>
                                </button>
                                <div id="s12ghonta11" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta12" aria-expanded="false" aria-controls="s12ghonta12">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                </button>
                                <div id="s12ghonta12" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta13" aria-expanded="false" aria-controls="s12ghonta13">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span> Europe </span>
                                </button>
                                <div id="s12ghonta13" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta14" aria-expanded="false" aria-controls="s12ghonta14">
                                    <span className="icon"><img src="assets/img/table/argentina.png" alt="china" /></span>
                                    <span> Argentina </span>
                                </button>
                                <div id="s12ghonta14" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta15" aria-expanded="false" aria-controls="s12ghonta15">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span> Czech Republic </span>
                                </button>
                                <div id="s12ghonta15" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta16" aria-expanded="false" aria-controls="s12ghonta16">
                                    <span className="icon"><img src="assets/img/table/india.png" alt="china" /></span>
                                    <span> India </span>
                                </button>
                                <div id="s12ghonta16" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta17" aria-expanded="false" aria-controls="s12ghonta17">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                </button>
                                <div id="s12ghonta17" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta18" aria-expanded="false" aria-controls="s12ghonta18">
                                    <span className="icon"><img src="assets/img/table/brazil.png" alt="china" /></span>
                                    <span> Brazil </span>
                                </button>
                                <div id="s12ghonta18" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta19" aria-expanded="false" aria-controls="s12ghonta19">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span> Europe </span>
                                </button>
                                <div id="s12ghonta19" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta20" aria-expanded="false" aria-controls="s12ghonta20">
                                    <span className="icon"><img src="assets/img/table/austria.png" alt="china" /></span>
                                    <span> Austria </span>
                                </button>
                                <div id="s12ghonta20" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta21" aria-expanded="false" aria-controls="s12ghonta21">
                                    <span className="icon"><img src="assets/img/table/algeria.png" alt="china" /></span>
                                    <span> Algeria </span>
                                </button>
                                <div id="s12ghonta21" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta22" aria-expanded="false" aria-controls="s12ghonta22">
                                    <span className="icon"><img src="assets/img/table/aruba.png" alt="china" /></span>
                                    <span> Aruba </span>
                                </button>
                                <div id="s12ghonta22" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta23" aria-expanded="false" aria-controls="s12ghonta23">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span> Belgium </span>
                                </button>
                                <div id="s12ghonta23" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta24" aria-expanded="false" aria-controls="s12ghonta24">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span> Panama </span>
                                </button>
                                <div id="s12ghonta24" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta25" aria-expanded="false" aria-controls="s12ghonta25">
                                    <span className="icon"><img src="assets/img/table/finland.png" alt="china" /></span>
                                    <span> Finland </span>
                                </button>
                                <div id="s12ghonta25" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta26" aria-expanded="false" aria-controls="s12ghonta26">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span> Czech Republic </span>
                                </button>
                                <div id="s12ghonta26" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta27" aria-expanded="false" aria-controls="s12ghonta27">
                                    <span className="icon"><img src="assets/img/table/burkina.png" alt="china" /></span>
                                    <span> Burkina Faso </span>
                                </button>
                                <div id="s12ghonta27" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta28" aria-expanded="false" aria-controls="s12ghonta28">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span> Belgium </span>
                                </button>
                                <div id="s12ghonta28" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta29" aria-expanded="false" aria-controls="s12ghonta29">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span> Japan </span>
                                </button>
                                <div id="s12ghonta29" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    
        
                        <div className="match-table">
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                Virtual Sports
                                </h2>
                                <p>
                                Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-football"></i>
                                </div>
                                <h5>
                                    eFootball
                                </h5>
                                <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-basketball"></i>
                                </div>
                                <h5>
                                    eBasketball
                                </h5>
                                <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-hockyman"></i>
                                </div>
                                <h5>
                                    eHockey
                                </h5>
                                <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-etennis"></i>
                                </div>
                                <h5>
                                    eTennis
                                </h5>
                                <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-football"></i>
                                </div>
                                <h5>
                                    eFootball
                                </h5>
                                <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-basketball"></i>
                                </div>
                                <h5>
                                    eBasketball
                                </h5>
                                <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                    CS:GO. ESL Challenger League Europe
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Oct 21 00:45
                                    </li>
                                    <li>
                                    Match Winner
                                    </li>
                                    <li>
                                    Total
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>HEET Infernos</span>
                                        <span className="icon">
                                        <img src="assets/img/table/infernos.png" alt="flag" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/sinners.png" alt="flag" />
                                        </span>
                                        <span>Sinners</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">2</span>
                                    <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">O 2.5</span>
                                    <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+38</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                    CS:GO. ESL Pro League
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Live in: 1h 12m
                                    </li>
                                    <li>
                                    Match Winner
                                    </li>
                                    <li>
                                    Total
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>Cloud9</span>
                                        <span className="icon">
                                        <img src="assets/img/table/cloud.png" alt="flag" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/evil.png" alt="flag" />
                                        </span>
                                        <span>Evil Geniuses</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">2</span>
                                    <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+1.6</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                    CS:GO. ESL Pro League
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Sep 21 20:00
                                    </li>
                                    <li>
                                    Match Winner
                                    </li>
                                    <li>
                                    Total
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>Eternal Fire</span>
                                        <span className="icon">
                                        <img src="assets/img/table/fireman.png" alt="man" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/furia.png" alt="flat" />
                                        </span>
                                        <span>FURIA</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">2</span>
                                    <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+110</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                    Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Quarter 3 '18
                                    </li>
                                    <li>
                                    Winner. Main time
                                    </li>
                                    <li>
                                    Total. Quarter 3
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                    <div className="items">
                                        <Link to="#">
                                        <span className="icon">
                                            <img src="assets/img/table/cuber.png" alt="flag" />
                                        </span>
                                        <span>New York Knicks (cyber)</span>
                                       </Link>
                                    </div>
                                    <div className="items">
                                        <Link to="#">
                                        <span className="icon">
                                            <img src="assets/img/table/pistons.png" alt="plag" />
                                        </span>
                                        <span>Detroit Pistons (cyber)</span>
                                       </Link>
                                    </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                    <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                    <Link to="#0">22 16 5</Link>
                                    <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                </div>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">X</span>
                                    <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">O 41.5</span>
                                    <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 41.5</span>
                                    <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="basketman">
                                        <img src="assets/img/table/basketman.png" alt="basketball" />
                                    </span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                    Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    1m
                                    </li>
                                    <li>
                                    Winner. Half 1
                                    </li>
                                    <li>
                                    Total. Quarter 2
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>Minnesota Timberwolves</span>
                                        <span className="icon">
                                        <img src="assets/img/table/minnersota.png" alt="flag" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/jazz.png" alt="flag" />
                                        </span>
                                        <span>Utah Jazz (cyber)</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+30</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="combo08" role="tabpanel">
                    
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Top Leagues
                        </h2>
                        </div>
                        <div className="leauge-name d-flex align-items-center justify-content-between">
                        <Link to="#0" className="left-countries">
                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                            <span> Europe - UEFA Nations League </span>
                       </Link>
                        <Link to="#0">
                            3 <i className="fas fa-angle-right"></i>
                       </Link>
                        </div>
                        <div className="head-title-two">
                        <h3>
                            Countries
                        </h3>
                        </div>
                        <div className="countries-tab pb-60">
                        <div className="accordion" id="countries24h">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta" aria-expanded="false" aria-controls="v12ghonta">
                                    <span className="icon"><img src="assets/img/table/bosnia.png" alt="china" /></span>
                                    <span> Bosnia & Herzegovina </span>
                                    </button>
                                    <div id="v12ghonta" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta2" aria-expanded="false" aria-controls="v12ghonta2">
                                    <span className="icon"><img src="assets/img/table/china.png" alt="china" /></span>
                                    <span>China</span>
                                    </button>
                                    <div id="v12ghonta2" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta3" aria-expanded="false" aria-controls="v12ghonta3">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span>Japan</span>
                                    </button>
                                    <div id="v12ghonta3" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta4tahir" aria-expanded="false" aria-controls="v12ghonta4tahir">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span>Paraguay</span>
                                    </button>
                                    <div id="v12ghonta4tahir" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta4" aria-expanded="false" aria-controls="v12ghonta4">
                                    <span className="icon"><img src="assets/img/table/bolivia.png" alt="china" /></span>
                                    <span>Bolivia</span>
                                    </button>
                                    <div id="v12ghonta4" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta5" aria-expanded="false" aria-controls="v12ghonta5">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                    </button>
                                    <div id="v12ghonta5" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta7" aria-expanded="false" aria-controls="v12ghonta7">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span>Belgium</span>
                                    </button>
                                    <div id="v12ghonta7" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta8" aria-expanded="false" aria-controls="v12ghonta8">
                                    <span className="icon"><img src="assets/img/table/angola.png" alt="china" /></span>
                                    <span>Angola</span>
                                    </button>
                                    <div id="v12ghonta8" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta9" aria-expanded="false" aria-controls="v12ghonta9">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                    </button>
                                    <div id="v12ghonta9" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta10" aria-expanded="false" aria-controls="v12ghonta10">
                                    <span className="icon"><img src="assets/img/table/australia.png" alt="china" /></span>
                                    <span> Australia </span>
                                    </button>
                                    <div id="v12ghonta10" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta11" aria-expanded="false" aria-controls="v12ghonta11">
                                    <span className="icon"><img src="assets/img/table/israel.png" alt="china" /></span>
                                    <span> Israel </span>
                                    </button>
                                    <div id="v12ghonta11" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta12" aria-expanded="false" aria-controls="v12ghonta12">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                    </button>
                                    <div id="v12ghonta12" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta13" aria-expanded="false" aria-controls="v12ghonta13">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span> Europe </span>
                                    </button>
                                    <div id="v12ghonta13" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta14" aria-expanded="false" aria-controls="v12ghonta14">
                                    <span className="icon"><img src="assets/img/table/argentina.png" alt="china" /></span>
                                    <span> Argentina </span>
                                    </button>
                                    <div id="v12ghonta14" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta15" aria-expanded="false" aria-controls="v12ghonta15">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span> Czech Republic </span>
                                    </button>
                                    <div id="v12ghonta15" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta16" aria-expanded="false" aria-controls="v12ghonta16">
                                    <span className="icon"><img src="assets/img/table/india.png" alt="china" /></span>
                                    <span> India </span>
                                    </button>
                                    <div id="v12ghonta16" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta17" aria-expanded="false" aria-controls="v12ghonta17">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                    </button>
                                    <div id="v12ghonta17" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta18" aria-expanded="false" aria-controls="v12ghonta18">
                                    <span className="icon"><img src="assets/img/table/brazil.png" alt="china" /></span>
                                    <span> Brazil </span>
                                    </button>
                                    <div id="v12ghonta18" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta19" aria-expanded="false" aria-controls="v12ghonta19">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span> Europe </span>
                                    </button>
                                    <div id="v12ghonta19" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta20" aria-expanded="false" aria-controls="v12ghonta20">
                                    <span className="icon"><img src="assets/img/table/austria.png" alt="china" /></span>
                                    <span> Austria </span>
                                    </button>
                                    <div id="v12ghonta20" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta21" aria-expanded="false" aria-controls="v12ghonta21">
                                    <span className="icon"><img src="assets/img/table/algeria.png" alt="china" /></span>
                                    <span> Algeria </span>
                                    </button>
                                    <div id="v12ghonta21" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta22" aria-expanded="false" aria-controls="v12ghonta22">
                                    <span className="icon"><img src="assets/img/table/aruba.png" alt="china" /></span>
                                    <span> Aruba </span>
                                    </button>
                                    <div id="v12ghonta22" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta23" aria-expanded="false" aria-controls="v12ghonta23">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span> Belgium </span>
                                    </button>
                                    <div id="v12ghonta23" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta24" aria-expanded="false" aria-controls="v12ghonta24">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span> Panama </span>
                                    </button>
                                    <div id="v12ghonta24" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta25" aria-expanded="false" aria-controls="v12ghonta25">
                                    <span className="icon"><img src="assets/img/table/finland.png" alt="china" /></span>
                                    <span> Finland </span>
                                    </button>
                                    <div id="v12ghonta25" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta26" aria-expanded="false" aria-controls="v12ghonta26">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span> Czech Republic </span>
                                    </button>
                                    <div id="v12ghonta26" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta27" aria-expanded="false" aria-controls="v12ghonta27">
                                    <span className="icon"><img src="assets/img/table/burkina.png" alt="china" /></span>
                                    <span> Burkina Faso </span>
                                    </button>
                                    <div id="v12ghonta27" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta28" aria-expanded="false" aria-controls="v12ghonta28">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span> Belgium </span>
                                    </button>
                                    <div id="v12ghonta28" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta29" aria-expanded="false" aria-controls="v12ghonta29">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span> Japan </span>
                                    </button>
                                    <div id="v12ghonta29" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta31" aria-expanded="false" aria-controls="v12ghonta31">
                                    <span className="icon"><img src="assets/img/table/guatemala.png" alt="china" /></span>
                                    <span> Guatemala </span>
                                    </button>
                                    <div id="v12ghonta31" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta32" aria-expanded="false" aria-controls="v12ghonta32">
                                    <span className="icon"><img src="assets/img/table/ireland.png" alt="china" /></span>
                                    <span> Ireland </span>
                                    </button>
                                    <div id="v12ghonta32" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                        <Link to="#0" className="left-countries">
                                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                            <span>Europe - UEFA Nations Leaue</span>
                                       </Link>
                                        <Link to="#0">
                                            9 <i className="fas fa-angle-right"></i>
                                       </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    

                        <div className="match-table">
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                    Virtual Sports
                                </h2>
                                <p>
                                    Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-hockyman"></i>
                                    </div>
                                    <h5>
                                    eHockey
                                    </h5>
                                    <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-etennis"></i>
                                    </div>
                                    <h5>
                                    eTennis
                                    </h5>
                                    <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-football"></i>
                                    </div>
                                    <h5>
                                    eFootball
                                    </h5>
                                    <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                    <div className="icon">
                                    <i className="icon-basketball"></i>
                                    </div>
                                    <h5>
                                    eBasketball
                                    </h5>
                                    <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Challenger League Europe
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Oct 21 00:45
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>HEET Infernos</span>
                                            <span className="icon">
                                                <img src="assets/img/table/infernos.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/sinners.png" alt="flag" />
                                            </span>
                                            <span>Sinners</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 2.5</span>
                                        <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+38</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Live in: 1h 12m
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Cloud9</span>
                                            <span className="icon">
                                                <img src="assets/img/table/cloud.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/evil.png" alt="flag" />
                                            </span>
                                            <span>Evil Geniuses</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+1.6</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                        CS:GO. ESL Pro League
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Sep 21 20:00
                                    </li>
                                    <li>
                                        Match Winner
                                    </li>
                                    <li>
                                        Total
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Eternal Fire</span>
                                            <span className="icon">
                                                <img src="assets/img/table/fireman.png" alt="man" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/furia.png" alt="flat" />
                                            </span>
                                            <span>FURIA</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">2</span>
                                        <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 2.5</span>
                                        <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+110</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        Quarter 3 '18
                                    </li>
                                    <li>
                                        Winner. Main time
                                    </li>
                                    <li>
                                        Total. Quarter 3
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/cuber.png" alt="flag" />
                                                </span>
                                                <span>New York Knicks (cyber)</span>
                                           </Link>
                                        </div>
                                        <div className="items">
                                            <Link to="#">
                                                <span className="icon">
                                                <img src="assets/img/table/pistons.png" alt="plag" />
                                                </span>
                                                <span>Detroit Pistons (cyber)</span>
                                           </Link>
                                        </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                        <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                        <Link to="#0">22 16 5</Link>
                                        <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                    </div>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">1</span>
                                        <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">X</span>
                                        <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">O 41.5</span>
                                        <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list">U 41.5</span>
                                        <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="basketman">
                                            <img src="assets/img/table/basketman.png" alt="basketball" />
                                        </span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                    <Link to="#" className="left-compo">
                                    <span>
                                        <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                        Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                                   </Link>
                                    <ul className="right-compo">
                                    <li>
                                        1m
                                    </li>
                                    <li>
                                        Winner. Half 1
                                    </li>
                                    <li>
                                        Total. Quarter 2
                                    </li>
                                    </ul>
                                </div>
                                <div className="table-body">
                                    <ul className="table-body-left">
                                    <li>
                                        <Link to="#">
                                            <span>Minnesota Timberwolves</span>
                                            <span className="icon">
                                                <img src="assets/img/table/minnersota.png" alt="flag" />
                                            </span>
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#0" className="vs">
                                            VS
                                       </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon">
                                                <img src="assets/img/table/jazz.png" alt="flag" />
                                            </span>
                                            <span>Utah Jazz (cyber)</span>
                                       </Link>
                                    </li>
                                    </ul>
                                    <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="list"><i className="fas fa-lock"></i></span>
                                        <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                        <span className="last-digit">+30</span>
                                   </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="combo09" role="tabpanel">
                
                        <div className="calender-bar">
                        <input type="text" name="datetimes" />
                        <i className="fa-regular fa-calendar-days"></i>
                        </div>
                        <div className="head-title mt-3 mb-4">
                        <h2>
                            Top Leagues
                        </h2>
                        </div>
                        <div className="leauge-name d-flex align-items-center justify-content-between">
                        <Link to="#0" className="left-countries">
                            <span><img src="assets/img/table/whl.png" alt="img" /></span>
                            <span> Europe - UEFA Nations League </span>
                       </Link>
                        <Link to="#0">
                            9 <i className="fas fa-angle-right"></i>
                       </Link>
                        </div>
                        <div className="head-title-two">
                        <h3>
                            Countries
                        </h3>
                        </div>
                        <div className="countries-tab pb-60">
                        <div className="accordion" id="countriescalender">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta" aria-expanded="false" aria-controls="c12ghonta">
                                    <span className="icon"><img src="assets/img/table/guatemala.png" alt="china" /></span>
                                    <span> Guatemala </span>
                                </button>
                                <div id="c12ghonta" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta2" aria-expanded="false" aria-controls="c12ghonta2">
                                    <span className="icon"><img src="assets/img/table/china.png" alt="china" /></span>
                                    <span>China</span>
                                </button>
                                <div id="c12ghonta2" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta3" aria-expanded="false" aria-controls="c12ghonta3">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span>Japan</span>
                                </button>
                                <div id="c12ghonta3" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta4tahir" aria-expanded="false" aria-controls="c12ghonta4tahir">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span>Paraguay</span>
                                </button>
                                <div id="c12ghonta4tahir" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta4" aria-expanded="false" aria-controls="c12ghonta4">
                                    <span className="icon"><img src="assets/img/table/bolivia.png" alt="china" /></span>
                                    <span>Bolivia</span>
                                </button>
                                <div id="c12ghonta4" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta5" aria-expanded="false" aria-controls="c12ghonta5">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                </button>
                                <div id="c12ghonta5" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta7" aria-expanded="false" aria-controls="c12ghonta7">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span>Belgium</span>
                                </button>
                                <div id="c12ghonta7" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta8" aria-expanded="false" aria-controls="c12ghonta8">
                                    <span className="icon"><img src="assets/img/table/angola.png" alt="china" /></span>
                                    <span>Angola</span>
                                </button>
                                <div id="c12ghonta8" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta9" aria-expanded="false" aria-controls="c12ghonta9">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span>Panama</span>
                                </button>
                                <div id="c12ghonta9" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta10" aria-expanded="false" aria-controls="c12ghonta10">
                                    <span className="icon"><img src="assets/img/table/australia.png" alt="china" /></span>
                                    <span> Australia </span>
                                </button>
                                <div id="c12ghonta10" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta11" aria-expanded="false" aria-controls="c12ghonta11">
                                    <span className="icon"><img src="assets/img/table/israel.png" alt="china" /></span>
                                    <span> Israel </span>
                                </button>
                                <div id="c12ghonta11" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta12" aria-expanded="false" aria-controls="c12ghonta12">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                </button>
                                <div id="c12ghonta12" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta13" aria-expanded="false" aria-controls="c12ghonta13">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span> Europe </span>
                                </button>
                                <div id="c12ghonta13" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta14" aria-expanded="false" aria-controls="c12ghonta14">
                                    <span className="icon"><img src="assets/img/table/argentina.png" alt="china" /></span>
                                    <span> Argentina </span>
                                </button>
                                <div id="c12ghonta14" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta15" aria-expanded="false" aria-controls="c12ghonta15">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span> Czech Republic </span>
                                </button>
                                <div id="c12ghonta15" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta16" aria-expanded="false" aria-controls="c12ghonta16">
                                    <span className="icon"><img src="assets/img/table/india.png" alt="china" /></span>
                                    <span> India </span>
                                </button>
                                <div id="c12ghonta16" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta31" aria-expanded="false" aria-controls="c12ghonta31">
                                    <span className="icon"><img src="assets/img/table/estonia.png" alt="china" /></span>
                                    <span> Estonia </span>
                                </button>
                                <div id="c12ghonta31" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta32tahir" aria-expanded="false" aria-controls="c12ghonta32tahir">
                                    <span className="icon"><img src="assets/img/table/guatemala.png" alt="china" /></span>
                                    <span> Guatemala </span>
                                </button>
                                <div id="c12ghonta32tahir" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta17" aria-expanded="false" aria-controls="c12ghonta17">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                </button>
                                <div id="c12ghonta17" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta18" aria-expanded="false" aria-controls="c12ghonta18">
                                    <span className="icon"><img src="assets/img/table/brazil.png" alt="china" /></span>
                                    <span> Brazil </span>
                                </button>
                                <div id="c12ghonta18" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta19" aria-expanded="false" aria-controls="c12ghonta19">
                                    <span className="icon"><img src="assets/img/table/wurope.png" alt="china" /></span>
                                    <span> Europe </span>
                                </button>
                                <div id="c12ghonta19" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta32" aria-expanded="false" aria-controls="c12ghonta32">
                                    <span className="icon"><img src="assets/img/table/paraguay.png" alt="china" /></span>
                                    <span> Paraguay </span>
                                </button>
                                <div id="c12ghonta32" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta20" aria-expanded="false" aria-controls="c12ghonta20">
                                    <span className="icon"><img src="assets/img/table/austria.png" alt="china" /></span>
                                    <span> Austria </span>
                                </button>
                                <div id="c12ghonta20" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta21" aria-expanded="false" aria-controls="c12ghonta21">
                                    <span className="icon"><img src="assets/img/table/algeria.png" alt="china" /></span>
                                    <span> Algeria </span>
                                </button>
                                <div id="c12ghonta21" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta22" aria-expanded="false" aria-controls="c12ghonta22">
                                    <span className="icon"><img src="assets/img/table/aruba.png" alt="china" /></span>
                                    <span> Aruba </span>
                                </button>
                                <div id="c12ghonta22" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta23" aria-expanded="false" aria-controls="c12ghonta23">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span> Belgium </span>
                                </button>
                                <div id="c12ghonta23" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta24" aria-expanded="false" aria-controls="c12ghonta24">
                                    <span className="icon"><img src="assets/img/table/panama.png" alt="china" /></span>
                                    <span> Panama </span>
                                </button>
                                <div id="c12ghonta24" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta25" aria-expanded="false" aria-controls="c12ghonta25">
                                    <span className="icon"><img src="assets/img/table/finland.png" alt="china" /></span>
                                    <span> Finland </span>
                                </button>
                                <div id="c12ghonta25" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta26" aria-expanded="false" aria-controls="c12ghonta26">
                                    <span className="icon"><img src="assets/img/table/czech.png" alt="china" /></span>
                                    <span> Czech Republic </span>
                                </button>
                                <div id="c12ghonta26" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta27" aria-expanded="false" aria-controls="c12ghonta27">
                                    <span className="icon"><img src="assets/img/table/burkina.png" alt="china" /></span>
                                    <span> Burkina Faso </span>
                                </button>
                                <div id="c12ghonta27" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta28" aria-expanded="false" aria-controls="c12ghonta28">
                                    <span className="icon"><img src="assets/img/table/belgi.png" alt="china" /></span>
                                    <span> Belgium </span>
                                </button>
                                <div id="c12ghonta28" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta29" aria-expanded="false" aria-controls="c12ghonta29">
                                    <span className="icon"><img src="assets/img/table/japan.png" alt="china" /></span>
                                    <span> Japan </span>
                                </button>
                                <div id="c12ghonta29" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                    <div className="accordion-body d-flex align-items-center justify-content-between">
                                    <Link to="#0" className="left-countries">
                                        <span><img src="assets/img/table/whl.png" alt="img" /></span>
                                        <span>Europe - UEFA Nations Leaue</span>
                                   </Link>
                                    <Link to="#0">
                                        9 <i className="fas fa-angle-right"></i>
                                   </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    
        
                        <div className="match-table">
                        
                        <div className="virtual-spots pb-20">
                            <div className="section-heder pb-20">
                                <h2>
                                Virtual Sports
                                </h2>
                                <p>
                                Permanent live, fast pacing matches, immediate settlement
                                </p>
                            </div>
                            <div className="virtual-wrap owl-theme owl-carousel">
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-football"></i>
                                </div>
                                <h5>
                                    eFootball
                                </h5>
                                <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-basketball"></i>
                                </div>
                                <h5>
                                    eBasketball
                                </h5>
                                <span>Live 8</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-hockyman"></i>
                                </div>
                                <h5>
                                    eHockey
                                </h5>
                                <span>Live 20</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-etennis"></i>
                                </div>
                                <h5>
                                    eTennis
                                </h5>
                                <span>Live 6</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-football"></i>
                                </div>
                                <h5>
                                    eFootball
                                </h5>
                                <span>Live 36</span>
                                </div>
                                <div className="virtual-items">
                                <div className="icon">
                                    <i className="icon-basketball"></i>
                                </div>
                                <h5>
                                    eBasketball
                                </h5>
                                <span>Live 8</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="match-table-head mt-minius">
                            <h2>
                                Counter-Strike GO
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap mb-10 pb-10">
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/csgo-flag.png" alt="icon" />
                                    </span>
                                    <span>
                                    CS:GO. ESL Challenger League Europe
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Oct 21 00:45
                                    </li>
                                    <li>
                                    Match Winner
                                    </li>
                                    <li>
                                    Total
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>HEET Infernos</span>
                                        <span className="icon">
                                        <img src="assets/img/table/infernos.png" alt="flag" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/sinners.png" alt="flag" />
                                        </span>
                                        <span>Sinners</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>1.50</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">2</span>
                                    <span>2.48</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">O 2.5</span>
                                    <span>1.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+38</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                    CS:GO. ESL Pro League
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Live in: 1h 12m
                                    </li>
                                    <li>
                                    Match Winner
                                    </li>
                                    <li>
                                    Total
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>Cloud9</span>
                                        <span className="icon">
                                        <img src="assets/img/table/cloud.png" alt="flag" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/evil.png" alt="flag" />
                                        </span>
                                        <span>Evil Geniuses</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>1.10</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">2</span>
                                    <span>6.25</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>3.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>1.34</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+1.6</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/esl.png" alt="icon" />
                                    </span>
                                    <span>
                                    CS:GO. ESL Pro League
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Sep 21 20:00
                                    </li>
                                    <li>
                                    Match Winner
                                    </li>
                                    <li>
                                    Total
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>Eternal Fire</span>
                                        <span className="icon">
                                        <img src="assets/img/table/fireman.png" alt="man" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/furia.png" alt="flat" />
                                        </span>
                                        <span>FURIA</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>2.62</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">2</span>
                                    <span>1.45</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>2.93</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 2.5</span>
                                    <span>1.78</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+110</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="match-table-head">
                            <h2>
                                eBasketball
                            </h2>
                            <Link to="#" className="tablebtn">
                                More
                           </Link>
                        </div>
                        <div className="table-wrap">
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/basketball.svg" alt="flag" />
                                    </span>
                                    <span>
                                    Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    Quarter 3 '18
                                    </li>
                                    <li>
                                    Winner. Main time
                                    </li>
                                    <li>
                                    Total. Quarter 3
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                    <div className="ebasket-left">
                                    <div className="items">
                                        <Link to="#">
                                        <span className="icon">
                                            <img src="assets/img/table/cuber.png" alt="flag" />
                                        </span>
                                        <span>New York Knicks (cyber)</span>
                                       </Link>
                                    </div>
                                    <div className="items">
                                        <Link to="#">
                                        <span className="icon">
                                            <img src="assets/img/table/pistons.png" alt="plag" />
                                        </span>
                                        <span>Detroit Pistons (cyber)</span>
                                       </Link>
                                    </div>
                                    </div>
                                    <div className="ebasket-right-content">
                                    <Link to="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                    <Link to="#0">22 16 5</Link>
                                    <Link to="#0"><span className="blods">53</span> 17 30 6</Link>
                                    </div>
                                </div>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">1</span>
                                    <span>12.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">X</span>
                                    <span>37.00</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">O 41.5</span>
                                    <span>1.02</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list">U 41.5</span>
                                    <span>1.77</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="basketman">
                                        <img src="assets/img/table/basketman.png" alt="basketball" />
                                    </span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                            <div className="table-inner">
                                <div className="table-head">
                                <Link to="#" className="left-compo">
                                    <span>
                                    <img src="assets/img/table/basketball.svg" alt="icon" />
                                    </span>
                                    <span>
                                    Cyberbasketball, Esports Battle (4x8 min.)
                                    </span>
                               </Link>
                                <ul className="right-compo">
                                    <li>
                                    1m
                                    </li>
                                    <li>
                                    Winner. Half 1
                                    </li>
                                    <li>
                                    Total. Quarter 2
                                    </li>
                                </ul>
                                </div>
                                <div className="table-body">
                                <ul className="table-body-left">
                                    <li>
                                    <Link to="#">
                                        <span>Minnesota Timberwolves</span>
                                        <span className="icon">
                                        <img src="assets/img/table/minnersota.png" alt="flag" />
                                        </span>
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#0" className="vs">
                                        VS
                                   </Link>
                                    </li>
                                    <li>
                                    <Link to="#">
                                        <span className="icon">
                                        <img src="assets/img/table/jazz.png" alt="flag" />
                                        </span>
                                        <span>Utah Jazz (cyber)</span>
                                   </Link>
                                    </li>
                                </ul>
                                <div className="table-body-right">
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>2.57</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>13.85</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>1.51</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>1.80</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="list"><i className="fas fa-lock"></i></span>
                                    <span>1.84</span>
                                   </Link>
                                    <Link to="#0" className="table-pointing-box">
                                    <span className="last-digit">+30</span>
                                   </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>
            </div>
        </div>

        <div className="sponsor-section">
            <div className="container">
            <div className="sponsor-wrap owl-theme owl-carousel">
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/01.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/02.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/03.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/04.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/05.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/06.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/07.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/08.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/sponsor/09.png" alt="img" />
                   </Link>
                </div>
            </div>
            <div className="sponsor-wrap dark-none owl-theme owl-carousel">
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/01.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/03.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/04.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/05.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/06.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/07.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/08.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/09.png" alt="img" />
                   </Link>
                </div>
                <div className="sponsor-item">
                    <Link to="#0">
                        <img src="assets/img/light-sponsor/01.png" alt="img" />
                   </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MainContent