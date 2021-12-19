import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
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
                <form method="POST" className="needs-validation" noValidate autoComplete="off">
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">Tên email</label>
                    <input id="email" type="email" className="form-control" name="email" required />
                    <div className="invalid-feedback">
                      Tên email không được bỏ trống
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">Mật khẩu</label>
                      
                    </div>
                    <input id="password" type="password" className="form-control" name="password" required />
                    <div className="invalid-feedback">
                      Mật khẩu không được bỏ trống
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                      <label htmlFor="remember" className="form-check-label">Nhớ tài khoản</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
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
