import * as Actions from '../constants/ActionTypes'

const initialViewerState = {
	course: {
		title:"",
		issues: [
		{id: 0, name : "goal1"},
		{id: 1, name : "goal2"},
		{id: 2, name : "goal3"},
],
		lectureId: 0,
		id: 0,
		attachments: [
		{id: 0, name : "att1"},
		{id: 1, name : "att2"},
		{id: 2, name : "att3"},
		]
		
	},
}

export default function ViewerPage(state = initialViewerState, action) {
	switch(action.type ) {
		case Actions.GET_COURSE:
			state.course = action.course;
			return Object.assign({}, state);
		case Actions.ADD_GOAL:
			state.course.goals.push(action.goal);
			return Object.assign({}, state);
	}
	return state;
}
