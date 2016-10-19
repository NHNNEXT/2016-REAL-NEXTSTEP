import * as Actions from '../constants/ActionTypes'

const initialState = {
	lectures:[]
}

export default function ViewerPage(state = initialState, action) {
	switch(action.type ) {
		case Actions.GET_MY_LECTURES:
			state.lectures = action.lectures;
			return Object.assign({}, state);
		case Actions.ADD_MY_LECTURE:
			state.lectures.push(action.lecture);
			return Object.assign({}, state);		
	}
	return state;
}
