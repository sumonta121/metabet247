import React, { useState } from "react";


const Signin = () => {

    

  const [inpval, setINP] = useState({
    email: "",
    password: "",
  });

  const setdata = (e) => {

    // read token from Local Storage
    const token = localStorage.getItem("jwt");
    inpval(token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setINP(data.data);
      }
    });
    //  JSON.parse(localStorage.getItem('jwt')).token


    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const userLogin = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      alert("User logged in successfully");
    } else {
      if (data.email) {
        alert(data.email);
      }

      if (data.password) {
        alert(data.password);
      }
      console.log(res.status);
    }
  };

  return (
    <div
      className="modal mylogin signup-popup fade"
      id="exampleModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="head">
              <h5>Sign into your account</h5>
              <p>
                Don't have an account?{" "}
                <a href="#0" className="text-base">
                  Sign up
                </a>
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn-close cross-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="register-from">
              <div className="items">
                <div className="form-input">
                  <label for="email3" className="form-label">
                    Email
                  </label>
                  <input
                    id="password-field"
                    type="text"
                    className="form-control"
                    onChange={setdata}
                    value={inpval.email}
                    name="email"
                  />
                </div>
              </div>
              <div className="items">
                <div className="form-input">
                  <label for="password-field" className="form-label">
                    Password
                  </label>
                  <div className="form-group">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      onChange={setdata}
                      value={inpval.password}
                      placeholder="Your Password"
                      name="password"
                    />
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="remember d-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      for="flexCheckDefault22"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault22"
                      />
                      Remember me
                    </label>
                  </div>
                  <a href="#0" className="forget">
                    Forget password?
                  </a>
                </div>
              </div>
              <div className="items text-center">
                <button
                  type="button"
                  onClick={userLogin}
                  className="cmn--btn cd-popup-close repopup"
                >
                  <span>Start Playing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
