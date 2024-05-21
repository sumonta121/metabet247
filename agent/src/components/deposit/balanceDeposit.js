import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";


const BalanceDeposit = () => {

    const token        = localStorage.getItem("jwtToken");
    const decodedToken = jwt_decode(token);
    const userInfo     = decodedToken;

    
    const [inpval, setINP] = useState({
        amount: "",
        user_id: userInfo.user_id,
    });
    const [responseData, setResponseData] = useState(null);
    const history = useHistory();
    
    const preventMinus = (e) => {
        if (e.key === "-" || e.key === "-") {
            e.preventDefault();
            alert("Invalid Number");
        }
    };

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => ({
            ...preval,
            [name]: value,
        }));
    };

    const addinpdata = async (e) => {
        e.preventDefault();
        const { user_id, amount } = inpval;
        const res = await fetch(`${apiConfig.baseURL}/api/agent/agent_balance_deposit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id,
                amount,
            }),
        });

        const data = await res.json();
     
        if (res.ok) {
            setResponseData(data);
            if (data.status === "SUCCESS") {
                alert("Please make payment using the payment url.");
                //history.push("/deposit-report");
            } else {
                alert("Failed. Please try again later.");
            }
        } else {
            alert("Failed. Please try again later.");
        }
    };

    return (
        <>
         <div id="main-wrapper">
          <Navbar />
          <Chatbox />
          <HeaderRight />
          <LeftSidebar />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Balance Deposit</h4>
                                <Link to="/agent-deposit-list">
                                    <button type="button" className="btn btn-success float-right">Deposit Report</button>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    className="form-control"
                                                    placeholder="Amount"
                                                    onChange={setdata}
                                                    value={inpval.amount}
                                                    onKeyDown={preventMinus}
                                                    min={0}
                                                    step={1}
                                                />
                                            </div>
                                        </div>
                                        <input type="hidden" name="user_id" value={userInfo.user_id} />
                                        <div className="row">
                                            <div className="col-sm-12" align="right">
                                                <button type="submit" name="send" onClick={addinpdata} className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                       </div> 

           <div className="card">
            {responseData && responseData.status === "SUCCESS" && (
                <div className="container">
                    <h2>Deposit ${responseData.data.totalFee} USDT</h2>

                    <p>Scan this code with the <a data-bn-type="link" href="https://www.binance.com/en/download" target="_blank" class="css-fud5ln">Binance app</a> to pay</p>
                    
                    <img src={responseData.data.qrcodeLink} alt="QR Code" />
                    <br /> <br />
                    <a target="_blank" href={responseData.data.universalUrl} class="btn btn-success "><div data-bn-type="text" class="css-rjqmed">Or Click here Continue with Direct payment</div></a>
                    <br /> <br />
                    <p>Or Copy and paste the payment link in broweser</p>

                    <input type="text" class="form-control" id="tokenField" value={responseData.data.checkoutUrl} readonly="" />

                    <button class="btn btn-success" style={{ backgroundColor: '#535A94'}} onclick="copyToken()">Copy Payment Link</button>

                    <p>Payment Link Expires in: {new Date(responseData.data.expireTime).toLocaleString()}</p>                   
                </div>
            )}    
            </div>
             </div>
            </div>
             </div>
           <Footer />
           </div>
        </>
    );
};

export default BalanceDeposit;
