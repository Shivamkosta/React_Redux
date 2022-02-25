import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productsReducers";


const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});
export default reducers;