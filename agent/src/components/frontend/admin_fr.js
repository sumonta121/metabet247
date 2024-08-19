import React, { Component } from 'react';
import NavBarContainer from "../nav/navbar_container";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class admin_fr  extends React.Component  {

  render() {

    const styles = {
      align: "center",
      color: "black",
      paddingTop: "150px;",
      borderRadius: "5px",
      textAlign: "center",
    };


    return (
      <>
      
      <div className="container h-500" style={{ paddingTop: '100px'}}>
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<a href="#">   <img style={{ maxHeight:'50px' }} src='https://i.ibb.co/9yz8KsF/Maxbet.webp?v=1' /></a>
									</div>
                                    <h4 className="text-center mb-4">  Hello Business Partner! Welcome to your Global Panel!  </h4>
                                    <form action="#">
                                        <div className="text-center">
                                            <Link className="btn btn-primary btn-block" to={'/login'}> Unlock </Link>
                                        </div>
                                    </form>
                                    <div className="text-center">
                                        MAXXBAT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



         
      </>
    )
  }
}
