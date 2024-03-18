import React, { Component  } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

export default class navbar extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      basicInfoshow: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.basicInfoData();
  }

  basicInfoData = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(`/api/commonData/basicinfo`);
      const newData = response.data;
      this.setState({
        basicInfoshow: newData,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };


  render() {
    const { basicInfoshow } = this.state;

    return (
      <>
        <div class="nav-header">
          <Link to="/admin" class="brand-logo">

            {/* <img src="assets/images/logo/success.png" class="logo-abbr" alt="" /> */}

            <img
               src={`https://meta-bet.onrender.com/images/${basicInfoshow.site_logo}`} 
              class="brand-title"
              alt=""
            />
            <img
               src={`https://meta-bet.onrender.com/images/${basicInfoshow.site_logo}`} 
              class="logo-color"
              alt=""
            />
            <img
               src={`https://meta-bet.onrender.com/images/${basicInfoshow.site_logo}`} 
              class="brand-title color-title"
              alt=""
            />
          </Link>
          <div class="nav-control">
            <div class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
              <svg
                style={{ width: "26", height: "26" }}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="22"
                  y="11"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="11"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="22"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="11"
                  y="11"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="11"
                  y="22"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  y="11"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="22"
                  y="22"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  y="22"
                  style={{ width: "4", height: "4" }}
                  rx="2"
                  fill="#2A353A"
                />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }
}
