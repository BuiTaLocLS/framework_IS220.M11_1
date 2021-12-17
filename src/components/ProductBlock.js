import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import useFetch from '../customize/fetch';
import './ProductBlock.scss';
const ProductBlock = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data: dataProducts, isLoading, isError }
        = useFetch(`http://localhost:54610/api/Product/GetAll`);

    useEffect(() => {
        if (dataProducts && dataProducts.length > 0) {
            // let data = dataProducts.slice(0, 9);
            let data = dataProducts;
            setNewData(data)
        }

        console.log(">>>newData: ", newData)
    }, [dataProducts]);

    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data);
    }

    const Background = "https://drive.google.com/uc?export=view&id=1SyFDHvXwM7qw12I30cfucIJdUGdi_Ljp";
    return (
        <div>
            <section className="section-products">
                <div className="container">
                    <div className="row text-start">
                        <div className="col-md-8 col-lg-6">
                            <div className="header">
                                <h3>Featured Product</h3>
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {newData && newData.length > 0 && newData.map(item => {
                            return (
                                <div className="col-md-6 col-lg-4 col-xl-3 mt-5">
                                    <div id="product-1" className="single-product" key={item.productTypeID}
                                        style={{
                                            backgroundImage: `url(${item.img_URL})`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    >
                                        <div className="part-1">
                                            <ul>
                                                <li><a href="#"><i className="bi bi-cart" /></a></li>
                                                <li><a href="#"><i className="bi bi-heart" /></a></li>
                                                <li><a href="#"><i className="bi bi-cart-plus" /></a></li>
                                                <li><a href="#"><i className="bi bi-chevron-bar-expand" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="part-2">
                                            <h3 className="product-title">{item.productName}</h3>
                                            <h4 className="product-old-price">{item.price} VND</h4>
                                            <h4 className="product-price">{item.price} VND</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {isLoading === true &&
                            <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                        }
                        {/* Single Product */}

                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProductBlock;