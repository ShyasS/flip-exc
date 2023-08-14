import { combineReducers } from "redux";
import { ProductReducer,selectedProduct } from "./ProductReducer";

const reducer = combineReducers({
    allProducts: ProductReducer,
    product: selectedProduct,

})

export default reducer;