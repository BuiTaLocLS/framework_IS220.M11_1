import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
              <h4>Shopthethao</h4>
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Tạo tài khoản</h1>
                  <form method="POST" className="needs-validation" noValidate autoComplete="off">
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="name">Họ và tên</label>
                      <input id="name" type="text" className="form-control" name="name" required autofocus />
                      <div className="invalid-feedback">
                        Name is required	
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">Email đăng nhập</label>
                      <input id="email" type="email" className="form-control" name="email"  required />
                      <div className="invalid-feedback">
                      Email is invalid
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="password">Mật khẩu</label>
                      <input id="password" type="password" className="form-control" name="password" required />
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                    </div>
                    
                    <div className="align-items-center">
                      <button type="submit" className="btn btn-primary ms-auto">
                        Tạo tài khoản	
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Bạn đã có tài khoản? <Link to="/log-in" className="text-dark">Đăng nhập</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Signup;
