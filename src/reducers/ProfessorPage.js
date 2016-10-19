import * as Actions from '../constants/ActionTypes'

const initialState = {
	professor:{
	    name: '',
	    lectures : [],
	    id: 0
	  }
}

export default function reducer(state = initialState, action) {
	switch(action.type ) {
		case Actions.GET_PROFESSOR:
			state.professor = action.professor;
			return Object.assign({}, state);		
		case Actions.ADD_LECTURE:
			state.professor.lectures.push(action.lecture);
			return Object.assign({}, state);
	}
	return state;
}
