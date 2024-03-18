import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class navbar extends Component {
  render() {
    return (
      <>
        <div class="nav-header">
          <Link to="/affiliate" class="brand-logo">
          
            <img
              src="https://metabet247.com/images/1699873787636.png?1"
              class="brand-title"
              alt=""
            />
            <img
              src="https://metabet247.com/images/1699873787636.png?1"
              class="logo-color"
              alt=""
            />
            <img
              src="https://metabet247.com/images/1699873787636.png?1"
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
