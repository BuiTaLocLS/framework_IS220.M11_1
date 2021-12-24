import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from '../customize/fetch';
import '../components/ProductBlock.scss';

const Catalog = () => {
  let { idType } = useParams();
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data: dataProducts, loading, isError }
    = useFetch(`http://localhost:54610/api/Product/GetAll`);


  useEffect(() => {
    if (dataProducts && dataProducts.length > 0) {
      setNewData(dataProducts)
    }
    console.log("id", idType);
    if (idType && idType > 0) {
      filterProductsbyType(idType);
    }

    document.querySelectorAll(`#type${idType}`).forEach(el => el.checked = true);

  }, [dataProducts, idType]);

  const [checked, setChecked] = useState(false);

  const filterProductsbyType = (typeNumber) => {
    let curentProducts = dataProducts;
    curentProducts = curentProducts.filter(item => item.productTypeID == typeNumber)
    setNewData(curentProducts)
  }

  const filterProducts = (typeNumber) => {
    let curentProducts = dataProducts;
    if (checked == false) {
      curentProducts = curentProducts.filter(item => item.productTypeID == typeNumber)
      setNewData(curentProducts)
    } else {
      setNewData(dataProducts);
    }
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-3">
          <div>
            <h5>Loại: </h5>
            <div><div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value=""
                name="type"
                id="type3"
                defaultChecked={checked}
                onChange={() => filterProducts(3)}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Giày thể thao
              </label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value=""
                  name="type"
                  id="type5"
                  defaultChecked={checked}
                  onChange={() => filterProducts(5)}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Quần áo bóng đá
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value=""
                  name="type"
                  id="type7"
                  defaultChecked={checked}
                  onChange={() => filterProducts(7)}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Túi thể thao
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value=""
                  name="type"
                  id="type6"
                  defaultChecked={checked}
                  onChange={() => filterProducts(6)}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Bó gói bóng đá
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <h5>Nhà cung cấp: </h5>
            <div><div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Aolikes
              </label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Super Sonic
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Mira Sky
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Jogarbola
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Fasten
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Clash
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Khác
                </label>
              </div>
            </div>
          </div>
          <hr />
          <div className="price-filter-control">
            <h5>Giá từ: </h5>
            <input type="number" className="form-control w-50 pull-left mb-2" defaultValue={300000} id="price-min-control" />
            <input type="number" className="form-control w-50 pull-right" defaultValue={1000000} id="price-max-control" />
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {loading === false && newData && newData.length > 0 && newData.map(item => {
              return (
                <div className="col-3" key={item.productID}>
                  <div className="">
                    <Link to={`/detail-product/${item.productID}`}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <div className="card-img-top single-product">
                        <img src={item.img_URL} className="img-fluid" alt="Card image cap" />
                      </div>
                      <div className="card-body text-center">
                        <h6 className="card-title">
                          <a href="product.html" className=" font-weight-bold text-dark small">{item.productName}</a>
                        </h6>
                        <h5 className="card-price small">
                          <i>
                            Giá: {item.price} VND</i>
                        </h5>
                      </div>
                    </Link>
                  </div>
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

        </div>
      </div>
    </div>
  );
};

export default Catalog;