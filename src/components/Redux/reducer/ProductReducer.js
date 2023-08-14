import { ActionTypes } from "../Action-types/ActionTypes";

const initialState = {
    products : []
}
export const ProductReducer = (state = initialState, {type,payload}) =>{
    switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return {...state,products:payload}  
        default:
            return state; 
    }

}

export const selectedProduct = (state = {},{type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        default:
           return state;
    }
}