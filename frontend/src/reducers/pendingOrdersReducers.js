import { PENDING_ADD_ORDER } from '../constants/pendingOrdersConstants';

export const PendingOrdersReducer = (state = { }, action) => {
  switch (action.type) {
    case PENDING_ADD_ORDER:
      const pendingOrder = action.payload; 
      const existOrder = state.pendingOrders.find(
        (x) => x.order === pendingOrder.order
      );

      if (existOrder) { 
        return {
          ...state,
          pendingOrders: state.pendingOrders.map((x) =>
            x.order === existOrder.order ? pendingOrder : x
          ),
        };
      } else {
        return {
          ...state,
          pendingOrders: [...state.pendingOrders, pendingOrder],
        };
      }

    default:
      return state;
  }
};
