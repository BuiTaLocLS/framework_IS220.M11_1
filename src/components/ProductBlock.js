import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import useFetch from '../customize/fetch';
import './ProductBlock.scss';
import { CartContext } from '../contexts/CartContext';

const ProductBlock = (props) => {
    const { handleBuyClick } = useContext(CartContext);
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data: dataProducts, loading, isError }
        = useFetch(props.url);

    useEffect(() => {
        if (dataProducts && dataProducts.length > 0) {
            let data = dataProducts.slice(0, 8);
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
                                <h2>{props.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {loading === false && newData && newData.length > 0 && newData.map(item => {
                            return (
                                <div className="col-md-6 col-lg-4 col-xl-3 mt-5">
                                    <Link to={`/detail-product/${item.productID}`}
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <div id="product-1" className="single-product" key={item.productID}
                                            style={{
                                                backgroundImage: `url(${item.img_URL})`,
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        >
                                            <div className="part-1">

                                            </div>
                                            <div className="part-2">
                                                <h3 className="product-title">{item.productName}</h3>
                                                <h4 className="product-price">Gi??: {item.price} VND</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}

                        {loading === true
                            && <tr className="mt-5">
                                <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                            </tr>
                        }
                        {/* Single Product */}

                    </div>
                </div >
            </section >

        </div >
    );
};

export default ProductBlock;