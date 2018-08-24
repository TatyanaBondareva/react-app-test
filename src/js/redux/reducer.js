import {CREATE_MEMBER, ADD_MEMBER, GET_MEMBERS} from './actionsTypes.js';
import { store } from './store.js';

const initialState = {
	member: {},
	list: [],
	list_after_reload: [],
}
export  function reducer(state = initialState, action) {
	switch(action.type) {
		case CREATE_MEMBER:
			return Object.assign({}, state, state.list.push(action.member));
		case ADD_MEMBER:
			return Object.assign(...state, {list: action.list});
		case GET_MEMBERS:
			return Object.assign(...state,  {list: action.list});
		default:
			return state;
	}
}