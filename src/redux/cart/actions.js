import {  ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, OPEN_MODAL, CLEAR_CART } from "./constants";

export const addItemToCart = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
})

export const openModal = (list) => ({
    type: OPEN_MODAL,
    payload: list
})

export const clearCart = (cartItems) => ({
    type: CLEAR_CART,
    payload: cartItems
})