import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./constants";

const INIT_STATE = {
  loading: false,
  err: null,
  data: []
}

const ProductReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      // localStorage.setItem("totalCount", action.payload.length)
      return { ...state, loading: false, err: null, data: action.payload };
    case FETCH_DATA_FAILED:
      return { ...state, loading: false, err: action.error };
    default:
      return state;
  }
};

export default ProductReducer;