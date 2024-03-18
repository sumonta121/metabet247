import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';

const DashContent =  () => {

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const userID =  userInfo.user_id;
  // console.log("Id: " + userID);


  // set data

  const [inpval, setINP] = useState({
    agentEmail: userInfo.email,
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };


  // fetch

  const [data, setDataAxios] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      
      try {
        const response = await axios.get(`/api/users/shows/${userID}`);
        // const response = await axios.get(`/api/users/shows/7`);
        setDataAxios(response.data);
        console.log(userID);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const [totalUsers, setTotalUsers] = useState(() => {
    const storedValue = localStorage.getItem("totalUsers");
    return storedValue ? parseInt(storedValue, 10) : 17842;
  });

  const [verifiedUsers, setVerifiedUsers] = useState(() => {
    const storedValue = localStorage.getItem("verifiedUsers");
    return storedValue ? parseInt(storedValue, 10) : 12354;
  });

  const [livePlayers, setLivePlayers] = useState(() => {
    const storedValue = localStorage.getItem("livePlayers");
    return storedValue ? parseInt(storedValue, 10) : 4738;
  });

  const [playersWon, setPlayersWon] = useState(() => {
    const storedValue = localStorage.getItem("playersWon");
    return storedValue ? parseInt(storedValue, 10) : 1309;
  });

 const [liveBoardStatus, setLiveBoardStatus] = useState(() => {
    const storedValue = localStorage.getItem("liveBoardStatus");
    return storedValue ? parseInt(storedValue, 10) : 2983;
  });

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTotalUsers((prev) => {
        const newValue = prev + Math.floor(Math.random() * 20);
        localStorage.setItem("totalUsers", newValue.toString());
        return newValue;
      });

      setVerifiedUsers((prev) => {
        const newValue = prev + Math.floor(Math.random() * 5);
        localStorage.setItem("verifiedUsers", newValue.toString());
        return newValue;
      });

      setLivePlayers((prev) => {
        const newValue = prev + Math.floor(Math.random() * 2);
        localStorage.setItem("livePlayers", newValue.toString());
        return newValue;
      });

      setPlayersWon((prev) => {
        const newValue = prev + Math.floor(Math.random() * 1);
        localStorage.setItem("playersWon", newValue.toString());
        return newValue;
      });  
	  
	  setLiveBoardStatus((prev) => {
        const newValue = prev + Math.floor(Math.random() * 1);
        localStorage.setItem("liveBoardStatus", newValue.toString());
        return newValue;
      });

    //   setLiveBoardStatus((prev) => {
    //     const newValue = Math.random() > 1 ? "Active" : "Inactive";
    //     localStorage.setItem("liveBoardStatus", newValue);
    //     return newValue;
    //   });
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">

                <form>
                  <input
                    type="hidden"
                    class="form-control"
                    name="agentEmail"
                    onChange={setdata}
                    value={userInfo.email}
                    placeholder="Email"
                  />
                </form>
         

                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-warning">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                           Balance
                        </p>
                        <h2 className="count-num text-white">${data[0].currency} </h2>
                      </div>
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart3" className="chart-primary"></div>
                    </div>
                  </div>
                </div>
        
                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-pink">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                          Cash IN
                        </p>
                        <h2 className="count-num text-white">$00</h2>
                      </div>
                    
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart4" className="chart-primary"></div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-primary">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         Recharged
                        </p>
                        <h2 className="count-num text-white">0 Times</h2>
                      </div>
                     
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart2" className="chart-primary"></div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-primary">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                         Comission
                        </p>
                        <h2 className="count-num text-white">0 Times</h2>
                      </div>
                     
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart2" className="chart-primary"></div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-primary">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                         My Team (Refer)
                        </p>
                        <h2 className="count-num text-white">0 </h2>
                      </div>
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart2" className="chart-primary"></div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-primary">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                         Total Sales
                        </p>
                        <h2 className="count-num text-white">$ 0.00</h2>
                      </div>
                     
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart2" className="chart-primary"></div>
                    </div>
                  </div>
                </div>


                
                <div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-warning">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>
												
												Total Users
											</p>
											<h2 className="count-num text-white">{totalUsers}</h2>
										</div>
									   <img src="https://cdn-icons-png.flaticon.com/512/681/681494.png" style={{maxHeight:'35px' }} />
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart3" className="chart-primary"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-secondary">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>
												
											Verified Users
											</p>
											<h2 className="count-num text-white">{verifiedUsers}</h2>
										</div>
										<img src="https://cdn-icons-png.flaticon.com/512/9977/9977358.png" style={{maxHeight:'35px' }} />
									
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart1" className="chart-primary"></div>
									</div>
								</div>
							</div>
        		         	<div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-green">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>
												
										  		Live Players
											</p>
											<h2 className="count-num text-white">{livePlayers}</h2>
										</div>
                  					  <img src="https://cdn-icons-png.flaticon.com/512/5822/5822065.png" style={{maxHeight:'35px' }} />
               
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart2" className="chart-green"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-pink">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>
												
												 Players Won
											</p>
											<h2 className="count-num text-white">{playersWon}</h2>
										</div>
                    <img src="https://cdn-icons-png.flaticon.com/512/4020/4020839.png" style={{maxHeight:'35px' }} />
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart4" className="chart-primary"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-primary">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>
												
										  		Live Boards
											</p>
											<h2 className="count-num text-white">${ liveBoardStatus }</h2>
										</div>
                    <img src="https://cdn-icons-png.flaticon.com/512/2061/2061105.png" style={{maxHeight:'35px' }} />
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart2" className="chart-primary"></div>
									</div>
								</div>
							</div>
              


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashContent;
