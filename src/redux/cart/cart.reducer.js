import cartActionTypes from "./cart.types";

import { addItemToCart, decreaseItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					CartItem => CartItem.id !== action.payload.id
				)
			};
		case cartActionTypes.DECREASE_ITEM:
			return {
				...state,
				cartItems: decreaseItemFromCart(state.cartItems, action.payload)
			};
		default:
			return state;
	}
};

export default cartReducer;
