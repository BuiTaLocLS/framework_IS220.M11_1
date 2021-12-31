import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import './AddProduct.scss'
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

const validPrice = (value) => {
  if (!Number.isInteger(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Đây phải là dạng số!
      </div>
    );
  }
};

const AddProduct = () => {

  const checkBtn = useRef();
  let history = useHistory();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const [tenSP, setSetTenSP] = useState("");
  const [loaiSP, setLoaiSP] = useState(1);
  const [ncc, setNCC] = useState("");
  const [gia, setGia] = useState("")

  const handleOnchangeTenSP = (event) => {
    setSetTenSP(event.target.value)
  }
  const handleOnchangeLoaiSP = (event) => {
    setLoaiSP(event.target.value)
  }
  const handleOnchangeNCC = (event) => {
    setNCC(event.target.value)
  }
  const handleOnchangeGia = (event) => {
    setGia(event.target.value)
  }

  const handleAdd = (e) => {
    console.log(tenSP,loaiSP,ncc,gia)
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.addProduct(tenSP,loaiSP,ncc,gia).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push("/add-product");
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

  return (
    <div className="container mt-5">
      <div className="card g-5 row" >
        <div className="col-md-7 col-lg-8">
          <h4>Thêm sản phẩm</h4>
          <Form noValidate>
            <div className="row">
              <div className='col-sm-12'>
                <label htmlFor="productName" className="form-label">
                  Tên sản phẩm
                </label>

                <Input
                id="productName" 
                type="text" 
                className="form-control" 
                placeholder='Tên sản phẩm' 
                value={tenSP}
                onChange={(event) => handleOnchangeTenSP(event)}
                validations={[required]} 
                />
               
              </div>
              
              <div className="col-sm-12 mb-3">

                <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                <div className="input-group">
                  <Input 
                  type="text" 
                  className="form-control" 
                  id="price" 
                  placeholder="100000" 
                  value={gia}
                  onChange={(event) => handleOnchangeGia(event)}
                  validations={[required, validPrice]} 
                   />
                  <div className="input-group-prepend">
                    <span className="input-group-text">VND</span>
                  </div>         
                </div>

              </div>
              

              <div className="row">
                <div className="col-md-6 mb-3" >
                  <label htmlFor="type">Loại sản phẩm</label>
                  <select 
                  className="form-select form-select-lg mb-3" 
                  id="type" 
                  required
                  value={loaiSP}
                  onChange={(event) => handleOnchangeLoaiSP(event)}
                  
                  >
                    <option value="" disabled selected hidden> Chọn loại sản phẩm</option>
                    <option value={4}>Giày thể thao</option>
                    <option value={5}>Quần áo bóng đá</option>
                    <option value={6}>Bó gối bóng đá</option>
                    <option value={7}>Túi thể thao</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>


                <div className="col-md-6 mb-3">
                  <label htmlFor="supplier">Nhà cung cấp</label>
                  <select 
                  className="form-select form-select-lg mb-3" 
                  id="supplier" 
                  value={ncc}
                  onChange={(event) => handleOnchangeNCC(event)}
                  required>
                    <option value="" disabled selected hidden>Chọn nhà cung cấp</option>
                    <option value={1}>Adidas</option>
                    <option value={2}>Nike</option>
                    <option value={3}>Aolikes</option>
                    <option value={4}>Super Sonic</option>
                    <option value={5}>Mira Sky</option>
                    <option value={6}>Jogarbola</option>
                    <option value={7}>Fasten</option>
                    <option value={8}>Clash</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
              </div>
            </div>

            <button className="w-100 btn btn-primary btn-lg" type="submit"
            onClick={(event) => handleAdd(event)}>
              Hoàn tất
            </button>
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
          </Form>
        </div> 

      </div>
    </div>
  );
}

export default AddProduct;
