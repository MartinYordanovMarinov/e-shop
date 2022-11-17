import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listOrders } from '../actions/orderActions';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchOrdersBox } from '../components/SearchOrdersBox';
import { Link } from 'react-router-dom';
import AdminPaginate from '../components/AdminPaginate';
import Paginate from '../components/Paginate';
import SearchBox from '../components/SearchBox';

const OrderListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const orderId = params.orderId;
  const pageNumber = params.pageNumber || 1;

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders,page,pages } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders((orderId || ''),pageNumber));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo,orderId,pageNumber]);

  return (
    <>
      <h1>Поръчки</h1>
      {!orderId ? (
        <div></div>
      ) : (
        <Link to="/admin/orderlist" className="btn btn-light">
          Назад
        </Link>
      )}

      <SearchOrdersBox />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ИДЕНТИФИКАТОР</th>
                <th>ПОТРЕБИТЕЛ</th>
                <th>ДАТА</th>
                <th>ОБЩО</th>
                <th>ПЛАТЕНО</th>
                <th>ДОСТАВЕНА</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light" className="btn-sm">
                        Детайли
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <AdminPaginate pages={pages} page={page} />
     
    </>
  );
};

export default OrderListScreen;
