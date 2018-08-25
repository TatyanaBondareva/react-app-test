//import { store } from './store.js';
export const sort = (argSort) => {
	console.log('list.length', argSort.length);
	let sortList = argSort.sort((item1, item2) => {
			if(parseInt(item1.points, 10) > parseInt(item2.points, 10)) {
				return -1;
			}
			if(parseInt(item1.points, 10) < parseInt(item2.points, 10))
				return 1;
			return 0;
	});
	console.log('sortList', sortList);
	return sortList;
}
