import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailProduct from './DetailProduct'
import AddProduct from '../components/AddProduct';
import Home from './Home';
import Catalog from './Catalog';
import Checkout from './Checkout';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ListCart from './ListCart';
import Contact from './Contact';
import CartConText from '../contexts/CartContext';
import AuthContext from '../contexts/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <AuthContext>
        <CartConText>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              {/* <Route path="/user/:id">
          <DetailUser />
        </Route> */}
              <Route path="/tim-kiem">
                <Search />
              </Route>
              <Route path="/gioi-thieu">
              </Route>
              <Route path="/chinh-sach-doi-tra" exact>
                <ReturnPolicy />
              </Route>
              <Route path="/chinh-sach-bao-mat" exact>
                <SecurityPolicy />
              </Route>
              <Route path="/dieu-khoan-dich-vu" exact>
                <Service />
              </Route>
              <Route path="/detail-product/:id">
                <DetailProduct />
              </Route>
              <Route path="/checkout" exact>
                <Checkout />
              </Route>
              <Route path="/log-in" exact>
                <LoginForm />
              </Route>
              <Route path="/sign-up" exact>
                <SignupForm />
              </Route>
              <Route path="/catalog/:idType">
                <Catalog />
              </Route>
              <Route path="/catalog">
                <Catalog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/add-product" exact>
                <AddProduct />
              </Route>
              <Route path="/list-cart" exact>
                <ListCart />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </CartConText>
      </AuthContext>
    </div>
  );
}
function Search() {
  return <h2>Tìm kiếm</h2>
}

function ReturnPolicy() {
  return <h2>Chính sách đổi trả</h2>
}
function SecurityPolicy() {
  return <h2>Chính sách bảo mật</h2>
}
function Service() {
  return <h2>Điều khoản dịch vụ</h2>
}

export default App;
