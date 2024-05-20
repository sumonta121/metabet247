import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classNames from 'classnames';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  };

  render() {
    const { menuActive } = this.state;

    return (
      <>
        <div className="nav-header">
          <Link to="/agent" className="brand-logo">
            <img
              src="https://i.ibb.co/YjmrvpP/1699873787636.webp"
              className="brand-title"
              alt=""
            />
          </Link>
          <div className="nav-control">
            <div
              className={classNames("hamburger", { "is-active": menuActive })}
              onClick={this.toggleMenu}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
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
        <div
          id="main-wrapper"
          className={classNames({ "show menu-toggle": menuActive })}
        >
          {/* Add your main content here */}
        </div>
      </>
    );
  }
}
