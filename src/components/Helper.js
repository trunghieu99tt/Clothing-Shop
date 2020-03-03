const getItemList = shopData => {
	return shopData
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

export { getItemList };
