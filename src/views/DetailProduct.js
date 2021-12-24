import React from 'react';
import './DetailProduct.scss';
import useFetch from '../customize/fetch';
import { useParams, useHistory } from 'react-router-dom';
const DetailProduct = () => {
    let { id } = useParams();
    const { data: dataProductsDetails, isLoading, isError }
        = useFetch(`http://localhost:54610/api/Product/GetbyID/${id}`);
    console.log("dateProduct", dataProductsDetails);
    return (
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={dataProductsDetails.img_URL} /></div>
                            </div>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{dataProductsDetails.productName}</h3>


                            <h4 className="price">Giá: <span>{dataProductsDetails.price}</span></h4>

                            <div className="action">
                                <button type="button" class="btn btn-primary">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailProduct;