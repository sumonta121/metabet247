import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import apiConfig from '../../apiConfig';

const DashContent =  () => {

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const userID =  userInfo.user_id;


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

  const [data, setDataAxios] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiConfig.baseURL}/api/users/shows/${userID}`);
      setDataAxios(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [AdminData, setAdminData] = useState(null);
  const fetchAdminData = async () => {
    try {
      const response = await axios.get(`${apiConfig.baseURL}/api/admin/adminData`);
      console.log(response);
      setAdminData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {   
    fetchData();
    fetchAdminData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  if (!AdminData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="content-body" style={{ padding:'0px'}}>
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

                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Current Balance</h4>
                        <h3> {data[0].currency} </h3>
                      </div>
                    </div>
                 </div>
				  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Transfered Balance </h4>
                        <h3> { AdminData.transfered_balance } TK</h3>
                      </div>
                    </div>
                </div>
				    
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Daily Sales </h4>
                        <h3> { AdminData.daily_sales } TK</h3>
                      </div>
                    </div>
                </div>
				    
				  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title"> Admin Balance</h4>
                        <h3> { AdminData.total_admin_balance } TK</h3>
                      </div>
                    </div>
                  </div>
				   
				  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Super Agent Balance</h4>
                        <h3> { AdminData.total_super_balance } TK</h3>
                      </div>
                    </div>
                  </div>
				  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Master Agent Balance</h4>
                        <h3> { AdminData.total_master_balance } TK</h3>
                      </div>
                    </div>
                  </div>
				     
                <div class="col-xl-3  col-lg-6 col-sm-6">
                    <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">User Balance</h4>
                        <h3> { AdminData.total_User_balance } TK</h3>
                      </div>
                   </div>
                </div>
             
           
                <div class="col-xl-3  col-lg-6 col-sm-6">
                    <div class="widget-stat card">
                    <div class="card-body p-0">
                      <h4 class="card-title">Total Admin </h4>
                      <h3> { AdminData.total_admin_count }</h3>
                    </div>
                  </div>
                </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Super Agents </h4>
                        <h3> { AdminData.total_super_count }</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Master Agents </h4>
                        <h3> { AdminData.total_master_count }</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Users </h4>
                        <h3> { AdminData.total_User_count }</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Winning Balance</h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Lost Balance</h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div> 
                  <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total (W) Paid Balance</h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Verified Users) </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Registered Users </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Deactivated Users </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Recharged Users </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Total Guest Users </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                  <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Running Table Game(Live)</h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  
				  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Running Slot Game (Live) </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Running Board Game (Live) </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  
                <div class="col-xl-3  col-lg-6 col-sm-6">
                      <div class="widget-stat card">
                      <div class="card-body p-0">
                        <h4 class="card-title">Running Bet (Live) </h4>
                        <h3>0.00</h3>
                      </div>
                    </div>
                  </div>
				  	  

{/* 
                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-warning">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                          Admin Balance
                        </p>

                        <h2 className="count-num text-white">  {data[0].currency} </h2>

                      </div>
                      
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
                         
                          Agent
                        </p>
                        <h2 className="count-num text-white">00</h2>
                      </div>
                    
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart1" className="chart-primary"></div>
                    </div>
                  </div>
                </div>

                
                <div className="col-xl-3 col-lg-6 col-sm-6">
                  <div className="card card-box bg-primary">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                          User
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
                  <div className="card card-box bg-pink">
                    <div className="card-header border-0 pb-0">
                      <div className="chart-num-days">
                        <p>
                         
                          Withdraw
                        </p>
                        <h2 className="count-num text-white">$00</h2>
                      </div>
                     
                    </div>
                    <div className="card-body p-0 custome-tooltip">
                      <div id="widgetChart4" className="chart-primary"></div>
                    </div>
                  </div>
                </div> */}


              </div>
            </div>

            {/* <div className="col-xl-12">
                <div className="row">

                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="card card-box bg-warning">
                      <div className="card-header border-0 pb-0">
                        <div className="chart-num-days">
                          <p>
                           
                            P2p  
                          </p>
                          <h2 className="count-num text-white">$0</h2>
                        </div>
                        
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
                           
                            Game 
                          </p>
                          <h2 className="count-num text-white">0</h2>
                        </div>
                      
                      </div>
                      <div className="card-body p-0 custome-tooltip">
                        <div id="widgetChart1" className="chart-primary"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="card card-box bg-pink">
                      <div className="card-header border-0 pb-0">
                        <div className="chart-num-days">
                          <p>
                           
                            Audit
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
                           
                            All Game
                          </p>
                          <h2 className="count-num text-white">0</h2>
                        </div>
                       
                      </div>
                      <div className="card-body p-0 custome-tooltip">
                        <div id="widgetChart2" className="chart-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default DashContent;
