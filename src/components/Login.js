import React, { useState, useContext } from "react";
import { UserContext } from "../views/LoginForm";

import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({login, error}) => {
  const [details, setDetails] = useState({
  accountID: "", 
  accountPassword: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    
    login(details);
  }

  return (

       <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <h4>Shopthethao</h4>
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Đăng nhập</h1> 
                
                
                {/* <form method="POST" className="needs-validation" noValidate autoComplete="off"  > */}
                <form  className="needs-validation" onSubmit={submitHandler} noValidate autoComplete="off"  >
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="account">Tên tài khoản</label>
                    <input 
                      id="account" 
                      type="email" 
                      className="form-control" 
                      name="account" 
                      required
                      onChange={e => setDetails({...details, accountID: e.target.value})}
                      value ={details.accountID}
                    />
                    <div className="invalid-feedback">
                      Tên tài khoản không được bỏ trống
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">Mật khẩu</label>
                      
                    </div>
                    <input 
                      id="password" 
                      type="password" 
                      className="form-control" 
                      name="password" 
                      onChange={e => setDetails({...details, accountPassword: e.target.value})}
                      value ={details.accountPassword}
                      required 
                    />
                    <div className="invalid-feedback">
                      Mật khẩu không được bỏ trống
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                      <label htmlFor="remember" className="form-check-label">Nhớ tài khoản</label>
                    </div>
                    <button variant="success" type="submit" className="btn btn-primary ms-auto">
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Bạn mới biết đến Shop? <Link to="/sign-up" className="text-dark">Tạo tài khoản</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Login;
