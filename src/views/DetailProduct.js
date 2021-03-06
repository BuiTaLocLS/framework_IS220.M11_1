import { useState, useContext } from 'react';
import './DetailProduct.scss';
import useFetch from '../customize/fetch';
import { useParams, useHistory } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

import AuthService from '../customize/auth.service';
const DetailProduct = () => {

    const accountID = AuthService.getCurrentUser().accountID;
    const { data: CartId } = useFetch(`http://localhost:54610/api/cart/GetCartID/${accountID}`);
    const { handleBuyClick } = useContext(CartContext);
    const [num, setNum] = useState(1);
    let { id } = useParams();
    const { data: dataProductsDetails, isLoading, isError }
        = useFetch(`http://localhost:54610/api/Product/GetbyID/${id}`);

    let mota = ["", "", "", "Trọng lượng giày được giảm thiểu hơn so với các phiên bản tiền nhiệm. Đế giày mỏng, phần đế được thiết kế từ chất liệu cao su cao cấp và được thiết kế mặt đế với nhiều chi tiêt đường rãnh, kẻ ngang có độ nông cạn khác nhau, tạo độ bám tốt và chống trơn trượt trên sân.", "Trọng lượng giày được giảm thiểu hơn so với các phiên bản tiền nhiệm. Đế giày mỏng, phần đế được thiết kế từ chất liệu cao su cao cấp và được thiết kế mặt đế với nhiều chi tiêt đường rãnh, kẻ ngang có độ nông cạn khác nhau, tạo độ bám tốt và chống trơn trượt trên sân.", "Độ co dãn tốt, giúp thoáng mát và thoải mái khi vận động. Màu áo quần cực bền, in ấn có độ thẩm mỹ cao, không bong tróc.", "", "Thiết kế 2 ngăn, ngăn lớn sử dụng đựng giày hoặc các vật dụng lớn khác, ngăn nhỏ thường sử dụng đựng quần áo, điện thoại, nước,... Ngoài ra, 2 ngăn còn giúp ngăn cản mùi hôi giữa giày, quần áo sau khi sử dụng với những vật dụng khác."]

    const handleOnChangeNum = (event) => {
        setNum(event.target.value);
        console.log(num)
    }


    return (
        <div className="container">
            <div className="card">
                <div className="container">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={dataProductsDetails.img_URL} /></div>
                            </div>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{dataProductsDetails.productName}</h3>
                            <p className="text-justify description">{mota[dataProductsDetails.productTypeID]}</p>

                            <h4 className="price">Giá: <span>{dataProductsDetails.price} </span>VNĐ</h4>

                            <div class="form-outline col-2">
                                <input min={1} type="number" id="typeNumber" class="form-control" value={num} onChange={(event) => handleOnChangeNum(event)} />
                            </div>

                            <div className="action mt-3">
                                <button type="button" class="btn btn-primary" onClick={() => handleBuyClick(
                                    dataProductsDetails.productID,
                                    CartId,
                                    num,
                                    dataProductsDetails.price * num,
                                    "2022-01-01T00:00:00"
                                )}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailProduct;