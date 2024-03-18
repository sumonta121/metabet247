import React, { Component } from "react";
import './footer.css';
export default class footer extends Component {
  render() {
    return (
      <>
        <div className="footer out-footer ">
          <div className="copyright" >
               <div className="footer">
                  <div className="contact"></div>
                  <div className="social-icons">
                      <a href="#"><img src="https://img.icons8.com/?size=512&id=k4jADXhS5U1t&format=png" alt="Telegram" /></a>
                      <a href="#"><img src="https://img.icons8.com/?size=512&id=uZWiLUyryScN&format=png" alt="WhatsApp" /></a>
                      <a href="#"><img src="https://img.icons8.com/?size=512&id=W2i9VMhMFvHm&format=png" alt="Email" /></a>
                  </div>
              </div>           
          </div>
        </div>
      </>
    );
  }
}
