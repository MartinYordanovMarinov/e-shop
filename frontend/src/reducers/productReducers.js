import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_UPDATE_AFTER_PAYMENT_REQUEST,
  PRODUCT_UPDATE_AFTER_PAYMENT_SUCCESS,
  PRODUCT_UPDATE_AFTER_PAYMENT_FAIL,
  PRODUCT_UPDATE_AFTER_PAYMENT_RESET,
} from '../constants/productConstants';

export const productListReducer = (
  state = {
    products: [],
    productsToBeFiltered: [],
    filteredProducts: [],
    ascProducts: [],
    descProducts: [],
    ratingProducts: [],
    productsAsc: [],
    productsDesc: [],
    productsRating: [],
    productsName: [],
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
        productsToBeFiltered: [],
        filteredProducts: [],
        ascProducts: [],
        descProducts: [],
        ratingProducts: [],
        productsAsc: [],
        productsDesc: [],
        productsRating: [],
        productsName: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        pagesSort: action.payload.pagesSort,
        page: action.payload.page,
        productsToBeFiltered: action.payload.productsToBeFiltered,
        filteredProducts: action.payload.filteredProducts,
        ascProducts: action.payload.ascProducts,
        descProducts: action.payload.descProducts,
        ratingProducts: action.payload.ratingProducts,
        productsAsc: action.payload.productsAsc,
        productsDesc: action.payload.productsDesc,
        productsRating: action.payload.productsRating,
        countName: action.payload.countName,
        products: action.payload.productsName,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
export const productUpdateReducerAfterPayment = (
  state = { product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_UPDATE_AFTER_PAYMENT_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_AFTER_PAYMENT_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_AFTER_PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_AFTER_PAYMENT_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
