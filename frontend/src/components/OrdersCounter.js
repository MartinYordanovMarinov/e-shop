import React from 'react'
import { useSelector } from 'react-redux';
import '../screens/OrderCounter.scss';

export const OrdersCounter = (props) => {
     const orderList = useSelector((state) => state.orderList);
     const { loading, error, orders, page, pages, allOrders } = orderList;
  return <div className="cart-no1">{allOrders.length}</div>;
}

