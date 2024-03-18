import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
// import  { useHistory  } from 'react-router-dom'
import apiConfig from '../apiConfig';

const AgentEdit = ({usAutoId}) => {



  console.log("Id: "+ usAutoId);

  let history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const adminCurrency = userInfo.currency;

  // input field    handle email password , user_id tpin role_as currency history

  const [inpval, setINP] = useState({
    handle: "",
    email: "",
    password: "",
    mobile: "",
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

  const addinpdata = async (e) => {
    e.preventDefault();
    const { handle, email, password, mobile } = inpval;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/update-agent/${usAutoId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handle,
        email,
        password,
        mobile,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Update Successfully");
      history.push("/agent-index");
    } else {
      if (data.email) {
        // alert(data.email);
      }
      console.log(res.status);
    }

    if (res.status === 400) {
      alert("A user has already registered with this address");
      // console.log("Data Inserted successfully");
    }
    if (res.status === 401) {
      alert("Email formatted correctly & Password between 6-30 chars");
      // console.log("Data Inserted successfully");
    }
  };

  // old data show

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
   useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        // const response = await axios.get(`/api/agent/edit-agent/${usAutoId}`);
        const response = await axios.get(`/api/agent/editagent/11`);
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [usAutoId]);


  const userId = (() => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (user) {
      return (
        <div>
          <p>{user.usAutoId}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  });


  return (
    <>
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div class=" col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Agent Edit | Id: {userId}</h4>
               


                {/* <Link to="/agent-index">
                  <button type="button" className="btn btn-success float-right">
                    Agent List{" "}
                  </button>
                </Link> */}
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Agent Name</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="handle"
                          class="form-control"
                          placeholder="Name"
                          onChange={setdata}
                          value={inpval.handle}
                          // value={this.state.handle}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Agent Email</label>
                      <div class="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                          onChange={setdata}
                          value={inpval.email}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Password</label>
                      <div class="col-sm-9">
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          placeholder="Password"
                          onChange={setdata}
                          value={inpval.password}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Mobile</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="mobile"
                          class="form-control"
                          placeholder="Mobile number"
                          onChange={setdata}
                          value={inpval.mobile}
                        />
                      </div>
                    </div>

                    {/* <input
                          type="text"
                          name="agentBalance"                       
                          onChange={setdata}
                          value={userInfo.currency}
                        /> */}

                    {/* <input
                      type="hidden"
                      name="loginEmail"
                      onChange={setdata}
                      value={userInfo.email}
                    /> */}

                    <div class="mb-3 row">
                      <div class="col-sm-10">
                        <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          class="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AgentEdit;


// 2


import React, { Component } from "react";
import axios from "axios";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

class AgentEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {

      handle: "",
      email: "",
      password: "",
      mobile: "",

    };
  }

  componentDidMount = () => {
    this.getEmployeeById();
  };

  // To get employee based on ID
  getEmployeeById() {
    axios
      .get(
        "/api/agent/editagent/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          handle: response.data.handle,
          email: response.data.email,
          password: response.data.password,
          mobile: response.data.mobile,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { handle, email, password, mobile } = this.state;
    axios
      .post(
        "/api/agent/update-agent/" +
          this.props.match.params.id,
        {
          handle: handle,
          email: email,
          password: password,
          mobile: mobile,
        }
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            First Name
            {/* handle, email, password, mobile */}
            <input
              name="firstName"
              type="text"
              value={this.state.handle}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          
          <br />
          <label>
            Email
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Password
            <input
              name="phone"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
            />
          </label> <br/>
          
          <label>
              Mobile
            <input
              name="phone"
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default AgentEdit;
