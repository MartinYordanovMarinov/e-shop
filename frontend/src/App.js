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
import { SecondHeader } from './components/SecondHeader';
import StoreScreen from './screens/StoreScreen';
import { PendingOrdersScreen } from './screens/PendingOrdersScreen';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OrdersCounter } from './components/OrdersCounter';
import Loader from './components/Loader';
import { SortOrderProductsScreen } from './screens/SortOrderProductsScreen';

function App() {
const [ready, setReady] = useState(false);

const orderList = useSelector((state) => state.orderList);
const { loading, error, orders, page, pages, allOrders } = orderList;
const [orderCount, setOrderCount] = useState(allOrders.length);console.log(allOrders);
useEffect(() => {
  setOrderCount(allOrders.length)
  
  
}, []);
  
  return (
    <Router>
      <Header count={orderCount}></Header>

      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Container>
          <Routes>
            <Route path="/store" element={<StoreScreen />} />
            <Route path="/sortorder" element={<SortOrderProductsScreen />} />
            <Route path="/order" element={<OrderScreen></OrderScreen>}></Route>
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
            <Route
              path="/pendingorders"
              element={<PendingOrdersScreen></PendingOrdersScreen>}
            ></Route>
            <Route
              path="/pendingorders/:id"
              element={<PendingOrdersScreen></PendingOrdersScreen>}
            ></Route>
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

            <Route path="/search/:keyword" element={<StoreScreen />} exact />
            <Route
              path="/adminsearch/:orderId"
              element={<OrderListScreen />}
              exact
            />
            <Route
              path="/admin/search/:email"
              element={<UserListScreen />}
              exact
            />
            <Route
              path="/admin/searchProducts/:keyword"
              element={<ProductListScreen />}
              exact
            />
            <Route path="/store/:category" element={<StoreScreen />} exact />
            <Route
              path="/sortorder/:sort"
              element={<SortOrderProductsScreen />}
              exact
            />
            <Route
              path="/store/:category/:sort"
              element={<StoreScreen />}
              exact
            />
            <Route
              path="/store/page/:pageNumber"
              element={<StoreScreen />}
              exact
            />

            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<StoreScreen />}
              exact
            />
            <Route
              path="/store/:category/page/:pageNumber"
              element={<StoreScreen />}
            />
            <Route
              path="/sortorder/:sort/page/:pageNumber"
              element={<SortOrderProductsScreen />}
            />
            <Route
              path="/store/:category/sort/page/:pageNumber"
              element={<StoreScreen />}
            />
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

            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route
              path="/admin/orderlist/:pageNumber"
              element={<OrderListScreen></OrderListScreen>}
              exact
            ></Route>
            <Route
              path="/admin/userlist/:pageNumber"
              element={<UserListScreen></UserListScreen>}
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
