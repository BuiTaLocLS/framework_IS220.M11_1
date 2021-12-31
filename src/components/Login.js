import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link ,useHistory } from "react-router-dom";

import AuthService from "../customize/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Không được bỏ trống!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  let history = useHistory();

  const [accountID, setAccountID] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const accountID = e.target.value;
    setAccountID(accountID);
  };

  const onChangePassword = (e) => {
    const accountPassword = e.target.value;
    setAccountPassword(accountPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(accountID, accountPassword).then(
        () => {
          history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

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
            <Form onSubmit={handleLogin} ref={form} className="needs-validation">
              <div className="mb-3">
                <label className="mb-2 text-muted" htmlFor="username">Tên tài khoản</label>
                <Input 
                  id="accountID" 
                  type="text" 
                  className="form-control" 
                  name="accountID" 
                  value={accountID}
                  onChange={onChangeUsername}
                  validations={[required]}

                  
                />
                <div className="invalid-feedback">
                  Tên tài khoản không được bỏ trống
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-2 w-100">
                  <label className="text-muted" htmlFor="accountPassword">Mật khẩu</label>
                  
                </div>
                <Input 
                  id="accountPassword" 
                  type="password" 
                  className="form-control" 
                  name="accountPassword" 
                  value={accountPassword}
                  onChange={onChangePassword}
                  validations={[required]}
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
                <button className="btn btn-primary ms-auto" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Đăng nhập</span>
                </button>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
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
};

export default Login;