import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import apiConfig from '../../apiConfig';

const DashContent = () => {
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const userID = userInfo.user_id;
  const user_role = userInfo.role_as;
  const user_id = userInfo.user_id;
  const role_as = userInfo.role_as;

  // State variables
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

  const [inpval, setINP] = useState({
    agentEmail: userInfo.email,
  });

  const [data, setDataAxios] = useState(null);
  const [AgentComm, setAgentComm] = useState(null);
  const [agentdata, setAgentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effects
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

    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('binance user ', userID);

        const response = await axios.get(`/api/agent/agent_balance_check/${userID}`);
        console.log(response.data); // Log the response data
        // Handle the response data as needed
      } catch (error) {
        console.error('Error:', error);
        // Handle errors
      }
    };

    fetchData();
  }, [userID]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/users/shows/${userID}`);
        setDataAxios(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userID]);

  useEffect(() => {
    const fetchDataCom = async () => {
      try {
        const response = await axios.get(`/api/agent/agentCommission/${userID}`);
        const formattedBalance = parseFloat(response.data).toFixed(2);
        setAgentComm(formattedBalance);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataCom();
  }, [userID]);

  useEffect(() => {
    const getAllUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(`${apiConfig.baseURL}/api/broadcast/new_chats`, {
          user_id: user_id,
          role_as: role_as,
        });
        const newData = response.data;
        setAgentData(newData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getAllUser();
  }, [user_id, role_as]);

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

  const createAgent = (() => {
    if (user_role === 2) {
      return (
        <Link to="/subreseller-index" className="btn btn-success">
          <i className="fas fa-download"></i>
          <span className="nav-text"> Create Master Agent </span>
        </Link>
      );
    } else if (user_role === 2.1) {
      return (
        <Link to="/affiliate-index" className="btn btn-success">
          <i className="fas fa-download"></i>
          <span className="nav-text"> Create Agent </span>
        </Link>
      );
    }
    return null; // Default return if no condition is met
  })();


  const welcomeDashboard = (() => {
    if (user_role === 2) {
      return (
        <span style={{ color: '#FFC107'}} className=""> Admin </span>
      );
    } else if (user_role === 2.1) {
		return (
			<span style={{ color: '#FFC107'}} className="">Super Agent </span>
		  );
    }else if (user_role === 4) {
		return (
			<span style={{ color: '#FFC107'}} className="">Master Agent </span>
		  );
    }
    return null; // Default return if no condition is met
  })();

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div className="content-body" style={{paddingTop:'0px'}}>
        <div className="container-fluid" style={{paddingBottom:'100px'}}>
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
					
			       <div className="col-xxl-12">
						<div className="overflow-hidden bg-transparent dz-crypto-scroll shadow-none">
						<div className="js-conveyor-example">
							<marquee class="marq" direction="left" style={{ color:'white', fontWeight:'900', fontSize:'18px' }} loop="">
								Welcome to { welcomeDashboard } Panel
							</marquee>
						</div>
						</div>
					</div>


					<div className="card bubles">
						<div className="card-body">
							<div className=" bubles-down">
								<div>
									<h2>Welcome, { data[0].first_name } { data[0].last_name }  </h2>
								
									<h3>Balance: { parseFloat(data[0].currency).toFixed(2) } TK</h3>
									<h4>User ID :  { data[0].user_id } </h4>
									<Link to="/user-bal-tr" className="btn btn-primary"><i className="fas fa-paper-plane" ></i> Send  </Link>
									&nbsp;
									{/* <a href="https://www.maxxbat.com/create-acount" className="btn btn-success" target="_blank" rel="noopener noreferrer">
										<i className="fas fa-plus"></i> Create User
										</a> */}
								</div>
								<div className="coin-img">
								
								</div>
							</div>
						</div>
					</div>
					
					
            
				<div className="col-xl-3 col-lg-6 col-sm-6">
					<div className="card card-box bg-warning">
						<div className="card-header border-0 pb-0">
							<div className="chart-num-days">
								<p>Current Balance</p>
							</div>
							</div>
						<div className="card-body p-0 custome-tooltip">
						<h2 className="count-num text-white">   {  parseFloat(data[0].currency).toFixed(2)  } TK</h2>
						</div>  
					</div>
				</div>
				
            	<div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-warning">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>Total Add Fund</p>
										</div>
									  </div>
									<div className="card-body p-0 custome-tooltip">
						  			<h2 className="count-num text-white">  0.00 TK</h2>
									</div>  
								</div>
							</div>

					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div className="card card-box bg-warning">
							<div className="card-header border-0 pb-0">
								<div className="chart-num-days">
									<p>Sales Balance</p>
								</div>
								</div>
							<div className="card-body p-0 custome-tooltip">
							<h2 className="count-num text-white">  0.00 TK</h2>
							</div>  
						</div>
					</div>

						{/* <div className="col-xl-3 col-lg-6 col-sm-6">
							<div className="card card-box bg-warning">
								<div className="card-header border-0 pb-0">
									<div className="chart-num-days">
										<p>Comission Balance</p>
									</div>
									</div>
								<div className="card-body p-0 custome-tooltip">
								<h2 className="count-num text-white">   {AgentComm} TK</h2>
								</div>  
							</div>
						</div> */}

            	<div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-warning">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>My Team </p>
										</div>
									  </div>
									<div className="card-body p-0 custome-tooltip">
						  			<h2 className="count-num text-white"> 0</h2>
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
											<h2 className="count-num text-white"> {playersWon} </h2>
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
											<h2 className="count-num text-white">{ liveBoardStatus }</h2>
										</div>
                    <img src="https://cdn-icons-png.flaticon.com/512/2061/2061105.png" style={{maxHeight:'35px' }} />
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart2" className="chart-primary"></div>
									</div>
								</div>
							</div>
              
                           {/* <div className="col-xl-3 col-lg-6 col-sm-6">
								<div className="card card-box bg-primary">
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
                      <Link to="/cashin" className="btn btn-success"><i className="fas fa-download" ></i> 	Cashin From Users  </Link>									
										</div>
									</div>
									<div className="card-body p-0 custome-tooltip">
										<div id="widgetChart2" className="chart-primary"></div>
									</div>
								</div>
							</div>
    */}
           
           			   <div className="col-xl-3 col-lg-6 col-sm-6" >
							<div className="card card-box bg-primary">
							<div className="card-header border-0 pb-0">
								<div className="chart-num-days">
								{ createAgent }					
								</div>
							</div>
							<div className="card-body p-0 custome-tooltip">
								<div id="widgetChart2" className="chart-primary"></div>
							</div>
							</div>
						</div> 

					<form>
						<input
							type="hidden"
							className="form-control"
							name="agentEmail"
							onChange={setdata}
							value={userInfo.email}
							placeholder="Email"
						/>
					</form>

              </div>


			  <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                      <table className="table">
                        <thead>
                          <th>SL</th>
                          <th>USER ID</th>
                          <th>Connect</th>
                        </thead>
                        <tbody>
						{agentdata?.length > 0 ? (
                            agentdata.map((item, index) => (
								<tr className="tb1" key={item.id}>
									<td>
									<span className="text1">{index + 1}</span>
									</td>
									<td>{item.user_id}</td>
									<td>
									<Link to={`/chat-with/${item.user_id}`} style={{ backgroundColor: '#ff000000' }}>
										<img
											style={{ maxHeight: '50px' }}
											src="https://cdn-icons-png.freepik.com/512/5962/5962463.png"
											alt="Chat Icon"
										/> 
											<span style={{background:'red',padding:'7px', borderRadius:'25px'}}>{item.unreadCount}</span>
										
									</Link>                              
									</td>
								</tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="3">Nothing...</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                   
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
