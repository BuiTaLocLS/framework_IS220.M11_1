import React from 'react';

import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="text-center text-lg-start bg-light text-muted">
                {/* Section: Social media */}
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className>
                    <div className="container text-center text-md-start mt-5 pt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />SHOPTHETHAO
                                </h6>
                                <p>
                                    Đây là một trang web bán hàng thể thao.
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Danh Mục
                                </h6>

                                <p>
                                    <Link to="/gioi-thieu" className="text-reset">Giới thiệu</Link>
                                </p>
                                <p>
                                    <Link to="/product-1" className="text-reset">Quần áo thể thao</Link>
                                </p>
                                <p>
                                    <Link to="/product-2" className="text-reset">Giày thể thao</Link>
                                </p>
                                <p>
                                    <Link to="/product-3" className="text-reset">Phụ kiện thể thao</Link>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Liên hệ
                                </h6>
                                <p>
                                    <Link to="/cskh" className="text-reset">CSKH</Link>
                                </p>
                                <p>
                                    <Link to="/uu-dai" className="text-reset">Ưu đãi</Link>
                                </p>
                                <p>
                                    <Link to="/chinh-sach-doi-tra" className="text-reset">Chính sách đổi trả</Link>
                                </p>
                                <p>
                                    <Link to="/chinh-sach-bao-mat" className="text-reset">Chính sách bảo mật</Link>
                                </p>
                                <p>
                                    <Link to="/dieu-khoan-dich-vu" className="text-reset">Điều khoản dịch vụ</Link>
                                </p>

                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Liên hệ
                                </h6>
                                <p><i className="fas fa-home me-3" /> UIT</p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    info@uit.edu.vn
                                </p>
                                <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </div>
    );
};

export default Footer;