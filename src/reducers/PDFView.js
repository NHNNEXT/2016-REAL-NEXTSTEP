import * as Actions from '../constants/ActionTypes'

const initialState = {
	comments:[]
}

export default function reducer(state = initialState, action) {
	switch(action.type ) {
		case "GET_COMMENTS":
			state.comments = action.comments;
			return Object.assign({}, state);
		case "ADD_COMMENT":
			state.comments.push(action.comment);
			return Object.assign({}, state);
	}
	return state;
}
