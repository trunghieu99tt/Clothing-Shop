import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.action";
import { getAllItems, getItem } from "./shop.action";

const INITIAL_STATE = {
	shopData: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopActionTypes.GET_ALL_ITEMS:
			return getAllItems(state.shopData);
		case shopActionTypes.GET_ITEM:
			return getItem(state.shopData, action.payload);
		default:
			return state;
	}
};

export default shopReducer;
