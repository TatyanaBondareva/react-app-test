import {CREATE_MEMBER, ADD_MEMBER, GET_MEMBERS} from './actionsTypes.js';
import { store } from './store.js';
import { sort } from'./sort.js';
export function createMember(member) {
	console.log('member', member);
	store.dispatch({type: CREATE_MEMBER, member: member});
	localStorage.setItem('member', JSON.stringify(member));
	localStorage.setItem('list', JSON.stringify(store.getState().list));
	addMember(store.getState().list);
	/*localStorage.removeItem('list');
	localStorage.setItem('list', JSON.stringify(member));
	console.log(localStorage.key(id));
	console.log(id);*/
	console.log('*', store.getState().list);
	console.log(JSON.parse(localStorage.list));
}
export function addMember(arg) {
	let members;
	console.log('list.length', arg);
	if (arg.length > 1) {
		//console.log('list.length', store.getState().list);
	members = sort(store.getState().list);
	console.log('sort', members);
}
else {
	members = arg;
		}
	store.dispatch({type: ADD_MEMBER, list: members});

}
export function getMembers() {
	if(localStorage.getItem('list') != null) {
		let members = sort(JSON.parse(localStorage.list));
		store.dispatch({type: GET_MEMBERS, list: members});
	}
	console.log('store.getState().list', store.getState().list);
}
