export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	} else {
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
	}
};

export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
	const newCartItems = cartItems.map(cartItem =>
		cartItem.id === cartItemToDecrease.id
			? {
					...cartItem,
					quantity: cartItem.quantity - 1
			  }
			: cartItem
	);
	return newCartItems.filter(item => item.quantity > 0);
};

export const addItemToWishList = (wishlistItems, cartItemToAdd) => {
	console.log("wishlistItems", wishlistItems);
	const existingWishlistItem =
		wishlistItems &&
		wishlistItems.find(
			wishlistItem => wishlistItem.id === cartItemToAdd.id
		);
	if (!existingWishlistItem) {
		return [...wishlistItems, cartItemToAdd];
	}
	return wishlistItems;
};
