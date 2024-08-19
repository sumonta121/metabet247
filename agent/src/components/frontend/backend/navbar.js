import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class Navbar extends Component {
  componentDidMount() {
    $(".nav-control").on('click', function() {
      $('#main-wrapper').toggleClass("menu-toggle");
      $(".hamburger").toggleClass("is-active");
    });
  }

  componentWillUnmount() {
    $(".nav-control").off('click');
  }

  render() {
    return (
      <>
        <div className="nav-header">
          <Link to="/agent" className="brand-logo">
            <img
              src="https://i.ibb.co/9yz8KsF/Maxbet.webp"
              className="brand-title"
              alt=""
            />
          </Link>
          <div className="nav-control">
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
              <svg
                style={{ width: "26px", height: "26px" }}
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="22"
                  y="11"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="11"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="22"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="11"
                  y="11"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="11"
                  y="22"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  y="11"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  x="22"
                  y="22"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
                <rect
                  y="22"
                  width="4"
                  height="4"
                  rx="2"
                  fill="#2A353A"
                />
              </svg>
            </div>
          </div>
        </div>
        <div id="main-wrapper">
          {/* Add your main content here */}
        </div>
      </>
    );
  }
}
