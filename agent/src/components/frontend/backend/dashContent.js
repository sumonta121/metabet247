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

  const [inpval, setINP] = useState({
    agentEmail: userInfo.email,
  });

  const [data, setDataAxios] = useState(null);

  const [agentdata, setAgentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('binance user ', userID);

        const response = await axios.get(`${apiConfig.baseURL}/api/agent/agent_balance_check/${userID}`);
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
			const response = await axios.get(`${apiConfig.baseURL}/api/users/shows/${userID}`);
			setDataAxios(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
		};

		fetchData();
		fetchAdminData();
	}, [userID]);

	const [agentDashboardData, setAgentDashboardData] = useState({
		received_from_admin: 0,
		total_Transfer_Agents: 0,
		total_Downline_Balance: 0,
		total_Downline_Count: 0
	  });



  const fetchAdminData = async () => {
    try {

	  const response = await axios.get(`${apiConfig.baseURL}/api/agent/agentData/${userID}`);
      console.log(response.data);
      setAgentDashboardData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



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
        <Link to="/subreseller-create" className="btn btn-success">
          <i className="fas fa-add"></i>
          <span className="nav-text"> Create Super Agent </span>
        </Link>
      );
    } else if (user_role === 2.1) {
      return (
        <Link to="/affiliate-index" className="btn btn-success">
          <i className="fas fa-add"></i>
          <span className="nav-text">Create Master Agent</span>
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
  
  const refferelLingk = (() => {
    if (user_role === 4) {
		const refLink = `https://www.maxxbat.com/create-acount?p=${user_id}`;
		const copyToClipboard = () => {
			navigator.clipboard.writeText(refLink).then(() => {
			alert('Referral link copied to clipboard!');
			});
		};
      return (<>
		<a href={`https://www.maxxbat.com/create-acount?p=${user_id}`} className="btn btn-success" target="_blank" rel="noopener noreferrer">
			<i className="fas fa-plus"></i> Create User
		</a>
		
			<div style={{ fontWeight: '900', color: '#35C31E', paddingTop:'10px' }} className="">
				Referral Link: 
				<div className="d-flex align-items-center">
					<input type="text" readOnly  value={`https://www.maxxbat.com/create-acount?p=${user_id}`} className="form-control me-2" style={{ backgroundColor: '#301F61' }} />
					<button onClick={copyToClipboard} className="btn btn-success">
					Copy
					</button>
				</div>
			</div></>
      );
    } else {
		return (
			<span> </span>
		  );
    }
   
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
									{ createAgent }		
									{ refferelLingk }
								</div>
								<div className="coin-img">
								</div>
							</div>
						</div>
					</div>
	
				<div class="col-xl-3  col-lg-6 col-sm-6">
					<div class="widget-stat card">
						<div class="card-body p-0">
							<h4 class="card-title">Current Balance</h4>
							<h3>  {  parseFloat(data[0].currency).toFixed(2)  } TK </h3>
						</div>
					</div>
				</div>
		
					<div className="col-xl-3 col-lg-6 col-sm-6">
					<div className="widget-stat card">
						<div className="card-body p-0">
						<h4 className="card-title">Total Received Balance</h4>
						<h3>{agentDashboardData ? `${agentDashboardData.received_from_admin} TK` : 'Loading...'}</h3>
						</div>
					</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-sm-6">
					<div className="widget-stat card">
						<div className="card-body p-0">
						<h4 className="card-title">Sales Balance</h4>
						<h3>{agentDashboardData ? `${agentDashboardData.total_Transfer_Agents} TK` : 'Loading...'}</h3>
						</div>
					</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-sm-6">
					<div className="widget-stat card">
						<div className="card-body p-0">
						<h4 className="card-title">Total Downline Balance</h4>
						<h3>{agentDashboardData ? `${agentDashboardData.total_Downline_Balance} TK` : 'Loading...'}</h3>
						</div>
					</div>
					</div>

		
				{/* <div class="col-xl-3  col-lg-6 col-sm-6">
					<div class="widget-stat card">
						<div class="card-body p-0">
							<h4 class="card-title"> Super Agent Balance</h4>
							<h3>  { agentDashboardData.total_Downline_Balance } TK </h3>
						</div>
					</div>
				</div> */}

				<div class="col-xl-3  col-lg-6 col-sm-6">
					<div class="widget-stat card">
						<div class="card-body p-0">
							<h4 class="card-title">Total Downline  Agent</h4>
							<h3>{agentDashboardData.total_Downline_Count ? agentDashboardData.total_Downline_Count : 'Loading...'}</h3>
							
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
