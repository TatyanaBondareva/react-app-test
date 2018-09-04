import {CREATE_MEMBER, ADD_MEMBER, GET_MEMBERS} from './actionsTypes.js';
import { store } from './store.js';
import { sort } from'./sort.js';
export function createMember(member) {
	try {
		store.dispatch({type: CREATE_MEMBER, member: member});
		localStorage.setItem('member', JSON.stringify(member));
		localStorage.setItem('list', JSON.stringify(store.getState().list));
		addMember(store.getState().list);
	} 
	catch (e) {
		if (e == QUOTA_EXCEEDED_ERR) {
			alert('Превышен лимит участников');
		}
	}
}
export function addMember(arg) {
	let members;
	if (arg.length > 1) {
		members = sort(store.getState().list);
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
}
