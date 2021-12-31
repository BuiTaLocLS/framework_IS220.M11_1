import React, { useContext, useState, useEffect } from 'react';
import './ListCart.scss';
import { CartContext } from '../contexts/CartContext';
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
const ListCart = () => {
    const { cart, handleBuyClick, deleteItemCart } = useContext(CartContext);

    const [totalmoney, setTotalmoney] = useState(1);
    useEffect(() => {
        var result = cart.reduce(function (total, currentValue, currentIndex, arr) {
            return total + currentValue.quantity * currentValue.price;
        }, 0);
        setTotalmoney(result);
    }, [cart]);

    const handleConfirm = () => {
        toast.success("Đặt hàng thành công!")
    }
    return (

        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        {cart && cart.length > 0 && cart.map(item => {
                                            return (
                                                <>
                                                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                            <img src={item.img_URL} className="w-100" alt="Blue Jeans Jacket" />
                                                            <a href="#!">
                                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 pb-3" key={item.productID}>
                                                        <p><strong>{item.productName}</strong></p>
                                                        <p>Giá sản phẩm: {item.price} VNĐ</p>
                                                        <p>Số lượng: {item.quantity}</p>
                                                        <strong>Tổng: {item.price * item.quantity} VNĐ</strong>
                                                        <button type="button" className="btn btn-outline-danger btn-block mt-3 mb-2" onClick={() => deleteItemCart(item.productID)}>
                                                            Xoá khỏi giỏ hàng
                                                        </button>
                                                    </div>

                                                    <hr />
                                                </>
                                            )
                                        })}
                                        {(!cart || cart.length == 0) &&
                                            <>
                                                <h2>Bạn chưa thêm sản phẩm nào vào đơn hàng</h2>

                                                <Link to="/"><button type="button" className="btn btn-outline-success btn-block mt-3 mb-2">Về trang chủ </button></Link>

                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Đơn giá</h5>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <strong>Tổng giá tiền: </strong>
                                        <strong>
                                            <p className="mb-0">{totalmoney} VNĐ</p>
                                        </strong>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary btn-block mt-3" onClick={handleConfirm}>
                                        Xác nhận mua hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default ListCart;