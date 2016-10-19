import * as Actions from '../constants/ActionTypes'

const initialState = {
	professors:[],
}
export default function mainPage(state = initialState, action) {
	switch(action.type ) {
		case Actions.GET_LECTURES_IN_PROFESSOR:
			const professors = state.professors.filter(professor => {    
				return professor.id === action.id
			});
			if(professors.length !== 1)
				return state;
			professors[0].courses = Object.assign([], action.courses);
			
			return Object.assign({}, state);
		case Actions.GET_LECTURES:
			if(!action.professors)
				return state;
				
			state.professors = action.professors;
			
			return Object.assign({}, state);
		case Actions.GET_PROFESSOR:
		case Actions.ADD_PROFESSOR:
	}
	return state;
}
