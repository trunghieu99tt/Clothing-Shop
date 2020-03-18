import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((ans, item) => ans + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((ans, item) => ans + item.price * item.quantity, 0)
);

export const selectWishlistItems = createSelector(
	[selectCart],
	cart => cart.wistlistItems
);
