import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import useFetch from '../customize/fetch';
import '../components/ProductBlock.scss';
const Catalog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data: dataProducts, isLoading, isError }
    = useFetch(`http://localhost:54610/api/Product/GetAll`);

  useEffect(() => {
    if (dataProducts && dataProducts.length > 0) {
      setNewData(dataProducts)
    }

    console.log(">>>newData: ", newData)
  }, [dataProducts]);

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-3">
          <div>
            <h5>Loại: </h5>
            <div><div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Giày thể thao
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
                  Quần áo bóng đá
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
                  Túi thể thao
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
                  Bó gói bóng đá
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
            {newData && newData.length > 0 && newData.map(item => {
              return (
                <div className="col-3" key={item.productID}>
                  <div className="">
                    <div className="card-img-top">
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
      </div>
    </div>
  );
};

export default Catalog;