import React from 'react';
import './Cart.scss';


const Cart = () => {
  return (
    <div className="container mt-5">
      {/* Cart */}
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="my-0">Giỏ hàng của bạn</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
        </div>
        {/* Checkout */}
        <div className="col-md-7 col-lg-8">
          <h4>Thông tin khách hàng</h4>
          <form noValidate>
            <div className="row">
              <div className='col-sm-12'>
                <label htmlFor="fullName" className="form-label">
                  Họ và tên
                </label>
                <input id="fullName" type="text" className="form-control" placeholder='Nguyễn Văn A' />
                <div className="invalid-feedback">
                  Họ và tên không được bỏ trống
                </div>
              </div>

              <div class="col-6">
                <label htmlFor="number-phone" className="form-label">Số điện thoại</label>
                <div class="input-group has-validation">
                  <input type="text" className="form-control" id="number-phone" placeholder="0976543218" required />
                  <div class="invalid-feedback">
                    Số điện thoại không được bỏ trống
                  </div>
                </div>
              </div>
              <div class="col-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Email không được bỏ trống
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Địa chỉ</label>
                <input type="text" className="form-control" id="address" placeholder="khu phố 6, Thủ Đức, Thành phố Hồ Chí Minh" required />
                <div className="invalid-feedback">
                  Địa chỉ không được bỏ trống
                </div>
              </div>

            </div>
            <h4 className="mb-3">Phương thức thanh toán</h4>

            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                <label className="form-check-label" htmlFor="credit">Thanh toán khi nhận hàng (COD)</label>
              </div>
            </div>
            <button className="w-100 btn btn-primary btn-lg" type="submit">Hoàn tất</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Cart;
