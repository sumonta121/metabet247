import React from 'react'

const betbalance = () => {
  return (
    <div className="modal right-menu-modal fade" id="exampleModal3" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-sm">
        <div className="modal-content">
            <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
                <div className="right-site-menu">
                    <div className="right-box">
                    <div className="right-wrapper-area">
                        <div className="blance-items">
                            <div className="left-blance">
                                <span><img src="assets/img/header/right-icon/wallet.svg" alt="icon" /></span>
                                <span className="text-blabce">Balance</span>
                            </div>
                            <span className="blance">
                                $300
                            </span>
                        </div>
                        <div className="betslip-wrapper">
                            <a href="#0" className="left-betslip">
                                <span><img src="assets/img/header/right-icon/bed.svg" alt="icon" /></span>
                                <span className="text-bets">Bet Slip</span>
                            </a>
                            <a href="#0" className="left-betslip">
                                <span><img src="assets/img/header/right-icon/bets.svg" alt="icon" /></span>
                                <span className="text-bets">My Bets</span>
                            </a>
                        </div>
                        <div className="combo-box">
                            <ul className="nav">
                                <li className="nav-item">
                                <a className="nav-link link-secondary" data-bs-toggle="tab" data-bs-target="#coombomobile" href="#"><span>Single bets</span></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link link-secondary active" data-bs-toggle="tab" data-bs-target="#bbetsmobile" href="#"><span>Combo</span></a>
                                </li>
                            </ul>
                            <div className="tab-content" id="tabContentboxesmobile">
                                <div className="tab-pane fade" id="coombomobile" role="tabpanel" >
                                <div className="combo-wrapper">
                                    <div className="combo-wrapper">
                                        <div className="close-box">
                                            <div className="close-items">
                                            <div className="close-head">
                                                <span>Latvia vs Moldova</span>
                                                <span className="close">
                                                    <i className="fas fa-xmark"></i>
                                                </span>
                                            </div>
                                            <div className="match-fixing">
                                                <div className="match-items">
                                                    <div className="match-items-left">
                                                        <div className="icon">
                                                        <img src="assets/img/header/right-icon/footaball.svg" alt="icon" />
                                                        </div>
                                                        <div className="cont">
                                                        <span>Moldova</span>
                                                        <span className="winner">Match Winner</span>
                                                        </div>
                                                    </div>
                                                    <div className="match-items-right">
                                                        <div className="icon">
                                                        <img src="assets/img/header/right-icon/uptodwon.svg" alt="icon" />
                                                        </div>
                                                        <span>5.20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="combo-switch">
                                            <span>
                                            Accept all odds changes
                                            </span>
                                            <label className="switch-com">
                                            <input type="checkbox" className="checkbox" hidden />
                                            <span className="checkbox-label">
                                                <span className="ball"></span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="ammount-items">
                                            <form action="#">
                                            <input type="number" placeholder="Bet Amount" />
                                            <button type="submit">
                                                Max
                                            </button>
                                            </form>
                                        </div>
                                        <div className="possible-win">
                                            <span>Possible win</span>
                                            <span className="amount">$300</span>
                                        </div>
                                        <div className="combo-footer">
                                            <a href="#0" className="cmn--btn">
                                            <span> Place Bet $300</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade show active" id="bbetsmobile" role="tabpanel">
                                <div className="combo-wrapper">
                                    <div className="close-box">
                                        <div className="close-items">
                                        <div className="close-head">
                                            <span>Scotland vs Ukraine</span>
                                            <span className="close">
                                                <i className="fas fa-xmark"></i>
                                            </span>
                                        </div>
                                        <div className="match-fixing">
                                            <div className="match-items">
                                                <div className="match-items-left">
                                                    <div className="icon">
                                                        <img src="assets/img/header/right-icon/footaball.svg" alt="icon" />
                                                    </div>
                                                    <div className="cont">
                                                        <span>Scotland</span>
                                                        <span className="winner">Match Winner</span>
                                                    </div>
                                                </div>
                                                <div className="match-items-right">
                                                    <div className="icon">
                                                        <img src="assets/img/header/right-icon/uptodwon.svg" alt="icon" />
                                                    </div>
                                                    <span>3.20</span>
                                                </div>
                                            </div>
                                            <div className="match-items">
                                                <div className="match-items-left">
                                                    <div className="icon">
                                                        <img src="assets/img/header/right-icon/footaball.svg" alt="icon" />
                                                    </div>
                                                    <div className="cont">
                                                        <span>Draw</span>
                                                        <span className="winner">Match Winner</span>
                                                    </div>
                                                </div>
                                                <div className="match-items-right">
                                                    <div className="icon">
                                                        <img src="assets/img/header/right-icon/uptodwon.svg" alt="icon" />
                                                    </div>
                                                    <span>4.60</span>
                                                </div>
                                            </div>
                                            <p>
                                                Add 2 more outcome(s) with odds greater than 1.4 to get x1.08
                                            </p>
                                            <div className="match-items match-progress">
                                                <div className="match-items-left">
                                                    <div className="prabox-wrap">
                                                    <div className="terminal-bar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <div className="bar-count">
                                                        <p>x1.08</p>
                                                        <p>x1,15</p>
                                                        <p>x1.20</p>
                                                        <p>x1.50</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="match-items-right">
                                                    <div className="icon">
                                                        <img src="assets/img/header/right-icon/uptodwon.svg" alt="icon" />
                                                    </div>
                                                    <span>1.00</span>
                                                </div>
                                            </div>
                                            <div className="match-items match-odds">
                                                <div className="match-items-left">
                                                    <div className="cont">
                                                        <span>Total odds</span>
                                                    </div>
                                                </div>
                                                <div className="match-items-right">
                                                    <div className="icon">
                                                        <img src="assets/img/header/right-icon/uptodwon.svg" alt="icon" />
                                                    </div>
                                                    <span>12.19</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="combo-switch">
                                        <span>
                                            Accept all odds changes
                                        </span>
                                        <label className="switch-com">
                                            <input type="checkbox" className="checkbox" hidden />
                                            <span className="checkbox-label">
                                            <span className="ball"></span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="ammount-items">
                                        <form action="#">
                                            <input type="number" placeholder="Bet Amount" />
                                            <button type="submit">
                                            Max
                                            </button>
                                        </form>
                                    </div>
                                    <div className="possible-win">
                                        <span>Possible win</span>
                                        <span className="amount">$300</span>
                                    </div>
                                    <div className="combo-footer">
                                        <a href="#0" className="cmn--btn">
                                        <span> Place Bet $300</span>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-box">
                            <div className="accordion" id="accordionExamplemy">
                                <div className="accordion-item">
                                <div className="accordion-header" id="headingThree03">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span className="icon"><i className="fa-sharp fa-solid fa-gear"></i></span>
                                    <span>Settings</span>
                                    </button>
                                    <div id="collapseThreethree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <a href="#0" className="condition-box">
                                            Terms & Conditions
                                        </a>
                                        <div className="select-wrap">
                                        <div className="select-one">
                                            <select className="select" name="select" id="n-select2">
                                                <option value="1">Lunguage</option>
                                                <option value="1">English</option>
                                                <option value="1">Spanish</option>
                                            </select>
                                            <span className="add">English</span>
                                        </div>
                                            <div className="select-two">
                                            <select className="select" name="select" id="s-select2">
                                                <option value="1">Odds</option>
                                                <option value="1">Decimal</option>
                                                <option value="1">Decimal Odds</option>
                                            </select>
                                            <span className="add">Decimal</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular-bets">
                        <div className="head">
                            <h6>
                                Popular bets
                            </h6>
                        </div>
                        <ul className="popoular-body">
                            <li className="popular-items">
                                <label className="popular-itmes-left">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="cont">
                                    <span className="text1">
                                        1x2
                                    </span>
                                    <span className="text2">
                                        Prance
                                    </span>
                                    <span className="text3">
                                        France - Austria
                                    </span>
                                </span>
                                </label>
                                <div className="popular-itmes-right">
                                <span>
                                    2.37
                                </span>
                                </div>
                            </li>
                            <li className="popular-items">
                                <label className="popular-itmes-left">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="cont">
                                    <span className="text1">
                                        1x2
                                    </span>
                                    <span className="text2">
                                        Turkey
                                    </span>
                                    <span className="text3">
                                        Turkey - Luxembourg
                                    </span>
                                </span>
                                </label>
                                <div className="popular-itmes-right">
                                <span>
                                    1.37
                                </span>
                                </div>
                            </li>
                            <li className="popular-items">
                                <label className="popular-itmes-left">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                <span className="icon">
                                    <i className="icon-football"></i>
                                </span>
                                <span className="cont">
                                    <span className="text1">
                                        1x2
                                    </span>
                                    <span className="text2">
                                        Alkmaar
                                    </span>
                                    <span className="text3">
                                        Alkmaar - Apollon
                                    </span>
                                </span>
                                </label>
                                <div className="popular-itmes-right">
                                <span>
                                    3.47
                                </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

  )
}

export default betbalance