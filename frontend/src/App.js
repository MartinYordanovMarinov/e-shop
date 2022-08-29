import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import { ShippingScreen } from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/order" element={<OrderScreen></OrderScreen>}></Route>
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/login/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
            <Route path="/cart/:id" element={<CartScreen></CartScreen>}></Route>
            <Route
              path="/admin/userlist"
              element={<UserListScreen></UserListScreen>}
            ></Route>
            <Route
              path="/admin/user/:id/edit"
              element={<UserEditScreen></UserEditScreen>}
            ></Route>
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen></ProductEditScreen>}
            ></Route>
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/search/:keyword" element={<HomeScreen />} exact />
            <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
            <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} exact />
            <Route
              path="/admin/productlist"
              element={<ProductListScreen></ProductListScreen>}
              exact
            ></Route>
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen></ProductListScreen>}
              exact
            ></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
