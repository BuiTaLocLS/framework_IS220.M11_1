
import React, { useState, useRef } from 'react';
import { Link ,useHistory } from "react-router-dom";

import Form1 from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import CheckButton from "react-validation/build/button";

import './Signup.scss'
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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Đây phải là dạng email!
      </div>
    );
  }
};

const vemail = (value) => {
  if (value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Email không quá 40 ký tự.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length > 50) {
    return (
      <div className="alert alert-danger" role="alert">
        Họ tên không quá 50 ký tự.
      </div>
    );
  }
};
const vaddress = (value) => {
  if (value.length > 60) {
    return (
      <div className="alert alert-danger" role="alert">
        Địa chỉ không quá 60 ký tự.
      </div>
    );
  }
};



const vpassword = (value) => {
  if (value.length < 5 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Mật khẩu phải từ 5 đến 20 ký tự.
      </div>
    );
  }
};

const Signup = () => {

  const checkBtn = useRef();
  let history = useHistory();

  const [hoten, setSethoten] = useState("");
  const [gt, setGT] = useState(1);
  const [ns, setNS] = useState("");
  const [dc, setDC] = useState("")
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnchangPass = (event) => {
    setPass1(event.target.value)
  }
  const handleOnchangeHoten = (event) => {
    setSethoten(event.target.value)
  }

  const handleOnchangeDiachi = (event) => {
    setDC(event.target.value)
  }

  const handleOnchangeGT = (event) => {
    setGT(event.target.value)
  }
  const handleOnchangeNS = (event) => {
    setNS(event.target.value)
  }
  const handleOnchangeEmail = (event) => {
    setEmail(event.target.value)
  }

  
  const handleOnchangPass2 = (event) => {
    setPass2(event.target.value)
  }

  const checkPass = (pass1, pass2) => {
    if (pass1 !== pass2) {
      return false;
    }
    return true;
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    if (!checkPass(pass1, pass2)) {
      toast.error("Mật khẩu xác nhận chưa đúng!!!");
      return;
    } else {
      console.log("pass: ", pass1);

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(hoten, email, pass1, ns, gt, dc).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push("/log-in");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
     
    }
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
              <h1 className="fs-4 card-title fw-bold mb-4">Tạo tài khoản</h1>

              <Form1 className="needs-validation" noValidate autoComplete="off">
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="name">Họ và tên</label>
                  <Input 
                  id="name" type="text" className="form-control" name="name" 
                  placeholder="Nguyễn A" value={hoten} onChange={(event) => handleOnchangeHoten(event)} 
                  validations={[required, vusername]} 
                  />

                  <div className="invalid-feedback">
                    Name is required
                  </div>
                </div>

                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="name">Địa chỉ</label>
                  <Input 
                  id="address" 
                  type="text" 
                  className="form-control" name="address" 
                  placeholder="TPHCM" value={dc} 
                  onChange={(event) => handleOnchangeDiachi(event)} 
                  validations={[required, vaddress]}  />
                  <div className="invalid-feedback">
                    Address is required
                  </div>
                </div>
                <div className="mb-3" className="form-label">
                  <label htmlFor="gender" className="mb-2 text-muted">Giới tính</label>
                  <select className="form-select form-select-lg mb-2" id="gender" value={gt} onChange={(event) => handleOnchangeGT(event)} required>
                    <option value="" disabled selected hidden>Chọn giới tính</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div>

                  <div className="mb-3" className="form-label">
                    <Form.Group controlId="dob">
                      <Form.Label htmlFor="birthdate" className="mb-2 text-muted">Ngày sinh</Form.Label>
                      <Form.Control type="date" name="dob" placeholder="Ngày sinh" value={ns} onChange={(event) => handleOnchangeNS(event)} />
                    </Form.Group>
                  </div>


                </div>
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="email">Email đăng nhập</label>
                  <Input 
                  id="email" type="email" className="form-control" 
                  name="email" placeholder="example@email.com" 
                  value={email} 
                  onChange={(event) => handleOnchangeEmail(event)} 
                  validations={[required, validEmail, vemail]}
                  />
                  <div className="invalid-feedback">
                    Email is invalid
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="password">Mật khẩu</label>
                  <Input id="password" type="password" 
                  className="form-control" name="password" placeholder="******"
                  value={pass1} onChange={(event) => handleOnchangPass(event)} 
                  validations={[required, vpassword]}
                  />
                  <div className="invalid-feedback">
                    Password is required
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="password">Nhập lại mật khẩu</label>
                  <Input 
                  id="password"
                  type="password" 
                  className="form-control" 
                  name="password" placeholder="******"  
                  value={pass2} 
                  onChange={(event) => handleOnchangPass2(event)}
                  validations={[required, vpassword]}
                  />
                  <div className="invalid-feedback">
                    Password is required
                  </div>
                </div>


                <div className="align-items-center">
                  <button className="btn btn-primary ms-auto" onClick={(event) => handleSignIn(event)}>
                    Tạo tài khoản
                  </button>
                </div>

                {message && (
                  <div className="form-group">
                    <div
                      className={ successful ? "alert alert-success" : "alert alert-danger" }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form1>
            </div>

            <div className="card-footer py-3 border-0">
              <div className="text-center">
                Bạn đã có tài khoản? <Link to="/log-in" className="text-dark"> Đăng nhập</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup;
