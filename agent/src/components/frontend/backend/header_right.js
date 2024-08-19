import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const HeaderRight = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      setUserInfo(decodedToken);
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("handle");
    localStorage.removeItem("email");
    localStorage.removeItem("role_as");
    localStorage.removeItem("role_as");
    localStorage.removeItem("currency");
    localStorage.removeItem("userId");
    localStorage.removeItem("user_id");
    localStorage.removeItem("jwtToken");
    window.location.replace("/");
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
              <div className="dashboard_bar">
                    {userInfo && (
                      ` ${
                        userInfo.role_as === 2
                          ? "Admin"
                          : userInfo.role_as === 4
                            ? "Master Agent"
                            : "Super Agent"
                      } Dashboard`
                    )}
                  </div>
              </div>
              <div className="navbar-nav header-right">
                <div className="nav-item d-flex align-items-center">
                  <div className="input-group search-area">
                    <span className="input-group-text">
                      <a href="javascript:void(0)"></a>
                    </span>
                    {/* <input
                      type="text"
                      className="form-control"
                      placeholder="Search here..."
                    /> */}
                  </div>
                  &nbsp; &nbsp; &nbsp;
                  <div>
                    {/* Id: {userInfo?.user_id} &nbsp;&nbsp; Email: {userInfo?.email} &nbsp;&nbsp; */}
                    {/* <span className="designation">
                      {userInfo &&
                        (userInfo.role_as === 2
                          ? "Country Agent"
                          : "Master Agent")
                      }
                    </span> */}
                    <button className="logout-btn" onClick={logoutUser}>
                      Lock Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderRight;
