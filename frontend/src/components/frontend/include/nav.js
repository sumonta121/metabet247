import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const Nav = () => {
  const token = localStorage.getItem('jwtToken');
  const userInfo = token ? jwt_decode(token) : null;
  const userRole = userInfo ? userInfo.role_as : null;
  const user_id = userInfo ? userInfo.user_id : null;

  const [isActive, setIsActive] = useState(false);
  const [isSettingDropdownOpen, setIsSettingDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [basicInfoshow, basic_Info_Data] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [user, setUser] = useState({});
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
    
      const script = document.createElement('script');
      script.src = '/assets/js/main.js';
      script.async = true;
      document.head.appendChild(script);

      try {
        // Call functions here
        await basicInfoData();
        await fetchUser();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 


  const handleClick = () => {
    localStorage.clear();
    localStorage.removeItem('jwtToken');
    window.location.replace('/');
  };

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  const toggleDropdown = () => {
    setIsSettingDropdownOpen(!isSettingDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const basicInfoData = async () => {
    try {
      const response = await axios.get(`/api/commonData/basicinfo`);
      const newData = response.data;
      basic_Info_Data(newData);
    } catch (error) {
      console.error('Error fetching basic info:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/api/users/singleUserBalance/${user_id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


if(userRole === 3){

    return (
            <header className="header-section header-hidden">
                <div className="header-wrapper">
                <div className="menu-logo-adjust d-flex align-items-center">
                    <div className="logo-menu me-5">
                           <Link className="logo" to={'/'}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/${basicInfoshow.site_logo}`}
                                className=""
                                style={{ maxHeight:'45px' }}
                                alt={basicInfoshow.site_title}
                            />
                           </Link>
                           <Link className="dark-logo" to={'/'}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/${basicInfoshow.site_logo}`}
                                className=""
                                style={{ maxHeight:'45px' }}
                                alt={basicInfoshow.site_title}
                            />
                           </Link>                      
                    </div>
                    <div className="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className="main-menu">
                        <li>
                            <a href="#">Inplay</a>
                        </li>
                        <li>
                            <a href="#">Sports</a>
                        </li>
                        <li>
                           <Link to="/live-casino">Live Casino</Link>
                        </li>
                        <li>                         
                           <Link to="/casino">Slot Games</Link>
                        </li>
                        {/* <li>
                            <Link to="/slot-game">Demo Slot Games</Link>
                        </li>
                         */}
                        <li>
                            <a href="#">Promotions</a>
                        </li> 

                        <li className="menu--btn">
                          <Link  className="btn--two" to={'/user'}>{ userInfo.handle }</Link>
                        </li>
                        <li className="menu--btn">
                          <button className="btn--two"  onClick={event => handleClick()}>Sign Out</button>
                        </li>
                    </ul>
                </div>
                <div className="right-menu-reature">
                {/* <div className="dropdown" style={{ margin:'5px'}}>
                    <Link  className="" to={'#'}>   Balance <br/> ${user !== null ? user.currency : '0'}</Link> 
                </div> */}
                {/* <div className="dropdown">
                        <button
                        style={{   backgroundColor: '#381b3200', border: '1px solid #bb339f00' }}
                        onClick={toggleDropdown}
                        className={`btn--two dropdown-toggle ${isSettingDropdownOpen ? 'show' : ''}`}
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded={isSettingDropdownOpen ? 'true' : 'false'}
                        >
               
                       
                       <svg  style={{color: 'white'}} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="2" stroke="#ffffff" stroke-width="1.5"/>
<path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="#ffffff" stroke-width="1.5"/>
<path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.298 5.64118 21.5794 6.2255 21.748 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 12H15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 9H14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 15H16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                        </button>
                        <ul
                        className={`dropdown-menu dropdown-menu-dark`} 
                        style={{ display: isSettingDropdownOpen ? 'block' : '' }}
                        aria-labelledby="dropdownMenuButton2">
                        
                        <li>                            
                            <Link to={'/user'} className="btn btn-sm  btn-success" >  &nbsp; User ID: { user_id }</Link>
                        </li>
                       
                        <li>                            
                            <Link to={'/user'} className="btn btn-sm  btn-info" >  &nbsp;  Settings</Link>
                        </li>

                        <li>
                            <select class="input-field-dropdown no-nice-select" name=''>
                                <option value="">Select ODDS</option>
                                <option value="1">American</option>
                                <option value="2">Decimal</option>
                            </select>
                        </li>
                        <li align="center">
                            <select class="input-field-dropdown no-nice-select" name=''>
                                <option value="">Select Lang</option>
                                <option value="1">En</option>
                                <option value="2">Jp</option>
                                <option value="3">Fr</option>
                            </select>
                        </li>
                        <li align="left" style={{ textAlign:'left'}}>
                            <button align="left" style={{ textAlign:'left'}}  className="input-field-dropdown"  onClick={event => handleClick()}> &nbsp; Sign Out </button>
                        </li>
                       
                         <li><hr classNameclassName="dropdown-divider" /></li>
                        <li >                            
                            <div className="mode--toggle" ><img src="assets/img/sun.png" alt="" /></div>
                        </li>

                        </ul>
                </div> */}

                {/* <div className="signup-area">
                    <Link  className="" to={'/user'}> ${ userInfo.currency }  <br/> Deposit</Link>
                </div> */}
             

                     <div className="dropdown">
                            <button
                            style={{   backgroundColor: '#381b3200', border: '1px solid #bb339f00' }}
                            onClick={toggleDropdown2}
                            className={`btn--two dropdown-toggle ${isUserDropdownOpen ? 'show' : ''}`}
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded={isUserDropdownOpen ? 'true' : 'false'}
                            >
                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z" fill="white"></path></svg>
                            </button>
                            <ul
                            className={`dropdown-menu dropdown-menu-dark`} 
                            style={{ display: isUserDropdownOpen ? 'block' : '' }}
                            aria-labelledby="dropdownMenuButton2">
                            <li>                            
                                 <Link  className="btn--two" to={'/user'}>{ userInfo.handle }</Link>
                            </li>
                            <li>  
                                <Link  className="btn--two" to={'#'}> Balance  ${user !== null ? user.currency : '0'}</Link>                           
                            </li>
                            <li>                            
                                 <Link  className="btn--two" to={'/user'}>Profile Details</Link>
                            </li>
                            <li>                            
                                 <Link  className="btn--two" to={'/deposit'}>Deposit</Link>
                            </li>
                            <li>                            
                                 <Link  className="btn--two" to={'/withdraw'}>Withdraw</Link>
                            </li>
                            <li>    
                                 <Link  className="btn--two" to={'#'}>Settings</Link>                        
                            </li>
                            <li align="left" style={{ textAlign:'left'}}>
                                <button align="left" style={{ textAlign:'left'}}  className="input-field-dropdown"  onClick={event => handleClick()}> &nbsp; Sign Out </button>
                            </li>
                        </ul>
                </div> 

                </div>
                </div>
            </header>            
    )

  }else{
    
    return (
        <header className="header-section header-hidden">
            <div className="header-wrapper">
            <div className="menu-logo-adjust d-flex align-items-center">
                
                <div className="logo-menu me-5">
                    <Link className="logo" to={'/'}>
                             <img
                                src={`${process.env.PUBLIC_URL}/images/${basicInfoshow.site_logo}`}
                                className=""
                                style={{ maxHeight:'45px' }}
                                alt={basicInfoshow.site_title}
                            />
                    </Link>
                    <Link className="dark-logo" to={'/'}>
                             <img
                                src={`${process.env.PUBLIC_URL}/images/${basicInfoshow.site_logo}`}
                                className=""
                                style={{ maxHeight:'45px' }}
                                alt={basicInfoshow.site_title}
                            />
                    </Link>   
                </div>
                <div className={`header-bar ${isActive ? 'active act' : ''}`} onClick={handleToggleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                 
                <ul className={`main-menu ${isActive ? 'active act' : ''}`}>                  
                    <li>
                        <a href="#">Inplay</a>
                    </li>
                    <li>
                        <a href="#">Sports</a>
                    </li>
                    <li>
                        <Link to="/live-casino">Live Casino</Link>
                    </li>
                    <li>                         
                        <Link to="/casino">Slot Games</Link>
                    </li>
                    <li>
                        <a href="#">eSports</a>
                    </li>
                    <li>
                        <a href="#">Promotions</a>
                    </li> 

                    <li className="menu--btn">                
                    <Link className="login-btn" to={'/login'}>Sign In</Link>
                    </li>
                    <li className="menu--btn">
                    <Link className="signup-btn" to={'/signup'}>Sign Up</Link>
                    </li>
                </ul>
            </div>

            <div className="right-menu-reature">             
                <div className="signup-area">                
                        <div className="dropdown">
                            <button
                            style={{   backgroundColor: '#381b3200', border: '1px solid #bb339f00' }}
                            onClick={toggleDropdown}
                            className={`btn--two dropdown-toggle ${isSettingDropdownOpen ? 'show' : ''}`}
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded={isSettingDropdownOpen ? 'true' : 'false'}
                            >
                             <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>ionicons-v5-q</title><path d="M256,176a80,80,0,1,0,80,80A80.24,80.24,0,0,0,256,176Zm172.72,80a165.53,165.53,0,0,1-1.64,22.34l48.69,38.12a11.59,11.59,0,0,1,2.63,14.78l-46.06,79.52a11.64,11.64,0,0,1-14.14,4.93l-57.25-23a176.56,176.56,0,0,1-38.82,22.67l-8.56,60.78A11.93,11.93,0,0,1,302.06,486H209.94a12,12,0,0,1-11.51-9.53l-8.56-60.78A169.3,169.3,0,0,1,151.05,393L93.8,416a11.64,11.64,0,0,1-14.14-4.92L33.6,331.57a11.59,11.59,0,0,1,2.63-14.78l48.69-38.12A174.58,174.58,0,0,1,83.28,256a165.53,165.53,0,0,1,1.64-22.34L36.23,195.54a11.59,11.59,0,0,1-2.63-14.78l46.06-79.52A11.64,11.64,0,0,1,93.8,96.31l57.25,23a176.56,176.56,0,0,1,38.82-22.67l8.56-60.78A11.93,11.93,0,0,1,209.94,26h92.12a12,12,0,0,1,11.51,9.53l8.56,60.78A169.3,169.3,0,0,1,361,119L418.2,96a11.64,11.64,0,0,1,14.14,4.92l46.06,79.52a11.59,11.59,0,0,1-2.63,14.78l-48.69,38.12A174.58,174.58,0,0,1,428.72,256Z" fill="white"></path></svg>
                            </button>
                            <ul
                            className={`dropdown-menu dropdown-menu-dark`} 
                            style={{ display: isSettingDropdownOpen ? 'block' : '' }}
                            aria-labelledby="dropdownMenuButton2">
                             <li>
                                <select class="input-field-dropdown no-nice-select" name=''>
                                    <option value="">Select ODDS</option>
                                    <option value="1">American</option>
                                    <option value="2">Decimal</option>
                                </select>
                            </li>
                            <li align="center">
                               <select class="input-field-dropdown no-nice-select" name=''>
                                    <option value="">Select Lang</option>
                                    <option value="1">En</option>
                                    <option value="2">Jp</option>
                                    <option value="3">Fr</option>
                                </select>
                            </li>
                            <li><hr classNameclassName="dropdown-divider" /></li>
                            <li >
                                <div className="mode--toggle" ><img src="assets/img/sun.png" alt="" /></div>
                            </li>
                            </ul>
                        </div>
                    <Link  className="btn--two" to={'/login'}>Sign In</Link>
                    <Link  className="btn--two" to={'/signup'}>Sign Up</Link>
                </div>
            </div>
            </div>
        </header>
    )
}

}

export default Nav