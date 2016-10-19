import * as types from '../constants/ActionTypes'

export const fetchLectureByCourse = (actions, courseId) => {
	let lectures = [
	  {
	    name: '실프1-1',
	    id: 0,
	  },
	  {
	    name: '실프1-2',
	    id: 1
	  }
	];
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.loadLecturesByCourse(lectures);
			resolve(lectures);
		}, 1000);
	});
};
export const loadLecturesByCourse = (lectures) => {
	
	return { type: types.GET_LECTURE_IN_COURSE , lectures};
};