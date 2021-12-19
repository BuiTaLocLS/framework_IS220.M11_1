import Header from '../components/Header';
import Footer from '../components/Footer';
import DetailProduct from './DetailProduct'
import Intro from './Intro';
import Home from './Home';
import Checkout from './Checkout';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>


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
            <Intro />
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
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/log-in">
            <LoginForm />
          </Route>
          <Route path="/sign-up">
            <SignupForm />
          </Route>
        </Switch>
        <Footer />
      </Router>
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
