const getItemsList = shopData => {
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

const shuffle_list = list => {
	for (let i = list.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[list[i], list[j]] = [list[j], list[i]];
	}
	return list;
};

export { getItemsList, shuffle_list };
