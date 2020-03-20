import { createSelector } from "reselect";

import { getItem, getAllItems } from "./shop.utils";

const selectShop = state => state.shop;

export const selectShopData = createSelector(
	[selectShop],
	shop => shop.shopData
);

export const selectItems = createSelector([selectShopData], shopData =>
	getAllItems(shopData)
);

export const selectCollection = collectionRouteName => {
	return createSelector([selectShopData], collections =>
		collections.find(
			collection => collection.routeName === collectionRouteName
		)
	);
};

export const selectItem = param => {
	return createSelector([selectShopData], collections =>
		getItem(collections, param)
	);
};
