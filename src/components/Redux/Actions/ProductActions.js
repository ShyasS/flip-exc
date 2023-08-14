import FakeStoreAPI from "../API/FakeStoreAPI";
import { ActionTypes } from "../Action-types/ActionTypes";

export const fetchProducts = () => async (dispatch,getState) =>{
        const response = await FakeStoreAPI.get("/products")
        dispatch({type:ActionTypes.FETCH_PRODUCTS, payload : response.data})
    }

export const fetchProduct = (id) => async (dispatch,getState) =>{
        const response = await FakeStoreAPI.get(`/products/${id}`)
        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload : response.data})
    }



