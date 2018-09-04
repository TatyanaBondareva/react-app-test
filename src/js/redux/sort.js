//import { store } from './store.js';
export const sort = (argSort) => {
	let sortList = argSort.sort((item1, item2) => {
			if(parseInt(item1.points, 10) > parseInt(item2.points, 10)) {
				return -1;
			}
			if(parseInt(item1.points, 10) < parseInt(item2.points, 10))
				return 1;
			return 0;
	});

	return sortList;
}
