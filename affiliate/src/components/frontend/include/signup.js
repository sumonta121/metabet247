import React,{ useState } from 'react'
import Toast  from '../../toast/toast';

import checkIcon from '../../../images/success.png'
const Signup = () => {

    const [inpval,setINP] = useState({
        handle : "",      
        email  : "",
        password  : "",
        password2  : "",
    })
    
        
    const setdata = (e)=>{
        console.log(e.target.value); 
        const {name,value} = e.target;
        setINP((preval)=>{
         return {
             ...preval,
             [name]:value
         }
        })
     }
     
    const addinpdata = async(e)=>{
        e.preventDefault();
        const {handle,email,password,password2} = inpval; 
        const res = await fetch("/api/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },            
            body:JSON.stringify({
                handle,email,password,password2
            })
        })

        const data = await res.json();
        console.log(data);         
        if(res.status === 200){
            alert('data inserted successfully');
        }else{
            if(data.email){
              alert(data.email);
            }  
            
            if(data.password2){
              alert(data.password2);
            } 
             if(data.password){
              alert(data.password);
            } 
            console.log(res.status);
        
        }

            
            
            
    }



  return (
    <div className="modal mylogin fade" id="exampleModal2" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <div className="head">  
                    <h5>Create New Account</h5>
                    <p>Already have an account? <a href="#0" className="text-base">Login</a></p>
                </div>
            </div>
            <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
                <div className="register-from">
                    <div className="items">
                        <div className="form-input">
                            <label for="uname" className="form-label">Username</label>
                            <input className="form-control" onChange={setdata}  value={inpval.handle} name='handle' type="text" id="handle" placeholder="Your Username" />
                        </div>
                        
                    </div>
                    <div className="items">
                        <div className="form-input">
                            <label for="email33" className="form-label">Email</label>
                            <input type="text" className="form-control"  onChange={setdata}  value={inpval.email} name="email" />
                               </div>
                    </div>
                    <div className="items">
                        <div className="form-input">
                           <label for="password-field" className="form-label">Password</label>
                           <div className="form-group">
                              <input id="password-field2" type="password" className="form-control" placeholder="Your Password" onChange={setdata}  value={inpval.password} name="password" />
                              {/* <span id="#password-field2" className="fa fa-fw fa-eye field-icon toggle-password2"></span> */}
                           </div>
                        </div>
                     </div>
                     <div className="items">
                        <div className="form-input">
                           <label for="password-field" className="form-label">Confirm Password</label>
                           <div className="form-group">
                              <input id="password-field2" type="password" className="form-control" placeholder="Your Confirm Password" onChange={setdata}  value={inpval.password2} name="password2" />
                              {/* <span id="#password-field2" className="fa fa-fw fa-eye field-icon toggle-password2"></span> */}
                           </div>
                        </div>
                     </div>

                    
                    <div className="items">
                        <div className="check-area">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="ones1" />
                                <label className="form-check-label" for="ones1">
                                I certify that I am at least 18 years of age
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="ones2" />
                                <label className="form-check-label" for="ones2">
                                I agree to the <a href="#0" className="text-base">Privacy Policy</a>
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="ones3" />
                                <label className="form-check-label" for="ones3">
                                I want to receive <a href="#0" className="text-base">news and offers</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="items text-center">
                        <button type="submit" onClick={addinpdata}  className="cmn--btn cd-popup-close repopup"><span>Start Playing</span></button>
                    </div>
                  
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup