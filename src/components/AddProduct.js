import React from 'react';
import './AddProduct.scss'

const AddProduct = () => {
  return (
    <div className="container mt-5">
      <div className="card g-5">  
        <div className="col-md-7 col-lg-8">
          <h4>Thêm sản phẩm</h4>
          <form noValidate>
            <div className="row">
              <div className='col-sm-12'>
                <label htmlFor="productName" className="form-label">
                Tên sản phẩm
                </label>
                <input id="productName" type="text" className="form-control" placeholder='Tên sản phẩm' />
                <div className="invalid-feedback">
                Tên sản phẩm không được bỏ trống
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">Giá sản phẩm</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="price" placeholder="100000" required />
                  <div className="input-group-prepend">
                    <span className="input-group-text">VND</span>
                  </div>
                  <div className="invalid-feedback" style={{width: '100%'}}>
                    Giá không được bỏ trống
                  </div>
                </div>
                
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="count" className="form-label">Số lượng sản phẩm</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="count" placeholder="3" required />
                  <div className="input-group-prepend">
                    <span className="input-group-text">Cái</span>
                  </div>
                  <div className="invalid-feedback" style={{width: '100%'}}>
                    Số lượng không được bỏ trống
                  </div>
                </div>
                
              </div>

              <div className="row">
                <div className="col-md-6 mb-3" >
                  <label htmlFor="type">Loại sản phẩm</label>
                  <select className="form-select form-select-lg mb-3" id="type" required>
                    <option value="" disabled selected hidden>Chọn loại sản phẩm</option>
                    <option value>Giày thể thao</option>
                    <option value>Quần áo bóng đá</option>
                    <option value>Bó gối bóng đá</option>
                    <option value>Túi thể thao</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
              
              
                <div className="col-md-6 mb-3">
                  <label htmlFor="supplier">Nhà cung cấp</label>
                  <select className="form-select form-select-lg mb-3" id="supplier" required>
                    <option value="" disabled selected hidden>Chọn nhà cung cấp</option>
                    <option value="1">Adidas</option>
                    <option value="2">Nike</option>
                    <option value="3">Aolikes</option>
                    <option value="4">Super Sonic</option>
                    <option value="5">Mira Sky</option>
                    <option value="6">Jogarbola</option>
                    <option value="7">Fasten</option>
                    <option value="8">Clash</option>

                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
              </div>     
            </div>
            <button className="w-100 btn btn-primary btn-lg" type="submit">Hoàn tất</button>
          </form>
        </div> 
      </div>
    </div>
  );
}

export default AddProduct;
