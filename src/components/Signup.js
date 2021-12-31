import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import './Signup.scss'
import { toast } from 'react-toastify';
import axios from "axios";


const Signup = () => {
  const [hoten, setSethoten] = useState("");
  const [gt, setGT] = useState(1);
  const [ns, setNS] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const handleOnchangPass = (event) => {
    setPass(event.target.value)
  }
  const handleOnchangeHoten = (event) => {
    setSethoten(event.target.value)
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
  const handleOnchangeUser = (event) => {
    setUser(event.target.value)
  }
  const handleOnchangPass2 = (event) => {
    setPass2(event.target.value)
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    if (pass !== pass2) {
      toast.error("Mật khẩu xác nhận chưa đúng!!!");
      return;
    } else {
      console.log(hoten, gt, ns, email, user, pass);

      // return axios
      //   .post(`http://localhost:54610/api/Account/Post`, {
      //     "AccountID": "123",
      //     "AccountPassword": "khongbiet",
      //     "UserID": "1234",
      //     "IsAdmin": "true",
      //     "IsActive": "true",
      //     "CreatedDate": "31/12/2021",
      //   })
      //   .then((response) => {
      //     if (response.data) {
      //       localStorage.setItem("user", JSON.stringify(response.data));
      //     }
      //     console.log("API return:", response.data);
      //     return response.data;
      //   });
      // toast.success("Đặt hàng thành công!")
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
              <form className="needs-validation" noValidate autoComplete="off">
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="name">Họ và tên</label>
                  <input id="name" type="text" className="form-control" name="name" placeholder="Nguyễn A" value={hoten} onChange={(event) => handleOnchangeHoten(event)} required autofocus />
                  <div className="invalid-feedback">
                    Name is required
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
                  <label className="mb-2 text-muted" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-control" name="email" placeholder="example@email.com" required value={email} onChange={(event) => handleOnchangeEmail(event)} />
                  <div className="invalid-feedback">
                    Email is invalid
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="user">Tên đăng nhập</label>
                  <input id="user" type="text" className="form-control" name="user" placeholder="user" onChange={(event) => handleOnchangeUser(event)} required value={user} />
                  <div className="invalid-feedback">
                    Email is invalid
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="password">Mật khẩu</label>
                  <input id="password" type="password" className="form-control" name="password" placeholder="******" required value={pass} onChange={(event) => handleOnchangPass(event)} />
                  <div className="invalid-feedback">
                    Password is required
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="password">Nhập lại mật khẩu</label>
                  <input id="password" type="password" className="form-control" name="password" placeholder="******" required value={pass2} onChange={(event) => handleOnchangPass2(event)} />
                  <div className="invalid-feedback">
                    Password is required
                  </div>
                </div>

                <div className="align-items-center">
                  <button className="btn btn-primary ms-auto" onClick={(event) => handleSignIn(event)}>
                    Tạo tài khoản
                  </button>
                </div>
              </form>
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
