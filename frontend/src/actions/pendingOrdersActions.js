import axios from 'axios';
import { PENDING_ADD_ORDER } from '../constants/pendingOrdersConstants';

export const addToPendingOrders = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/orders/${id}`);

  dispatch({
    type: PENDING_ADD_ORDER, 
    payload: {
      order: data._id,
      
    },
  });

  localStorage.setItem(
    'pendingOrders',
    JSON.stringify(getState().pendingOrders.pendingOrders)
  );
};
