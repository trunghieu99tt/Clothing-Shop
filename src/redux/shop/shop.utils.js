export const getAllItems = shopdata => {
	return shopdata
		.map(data => {
			const { routeName } = data;
			return data.items.map(item => {
				return {
					routeName,
					...item
				};
			});
		})
		.reduce((res, item) => res.concat(item), []);
};

export const getItem = (shopdata, filter) => {
	const { collectionID, itemID } = filter;

	const filteredCollection =
		shopdata && shopdata.find(collection => collection.id === collectionID);

	return (
		(filteredCollection &&
			filteredCollection.items &&
			filteredCollection.items.find(item => item.id === itemID)) ||
		{}
	);
};
