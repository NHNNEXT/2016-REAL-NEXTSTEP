import * as Actions from '../constants/ActionTypes'

const initiallecturePageState = {
	lecture: {
		name:"",
		courses:[],
		professor:0,
		status: -1,
		participants : []
	},
}

export default function CourseListPage(state = initiallecturePageState, action) {
	switch(action.type ) {
		case Actions.GET_COURSES:
			state.lecture = action.lecture;
			return Object.assign({}, state);
		case Actions.ADD_COURSE:
			state.lecture.courses.push(action.course);
			return Object.assign({}, state);
		case Actions.SWAP_COURSE:
			
			let courses = state.lecture.courses, b;
			
			b = courses[action.myPosition];
			courses.splice(action.myPosition,1);
			courses.splice(action.targetPosition,0, b);
			
			return Object.assign({}, state);
		case Actions.GET_PARTICIPATNS:
			state.lecture.participants = state.participants;
			return Object.assign({}, state);			
	}
	return state;
}
