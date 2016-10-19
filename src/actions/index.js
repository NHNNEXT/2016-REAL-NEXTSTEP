import * as types from '../constants/ActionTypes'

export const fetchAddMyLecture = (actions, lectureId) => {
	return new Promise((resolve, reject) => {
	let lecture = {
		    name: '실전프로젝트',
		    id: 0,
		    status : 0,
		    
		    		    professor: {
			    name: "박재성1"
		    }
		  };
	setTimeout(()=>{
		actions.addMyLecture(lecture);
		resolve(lecture);
	}, 1000);
	
	});
}
export const addMyLecture = (lecture) => {
	
	return { type: types.ADD_MY_LECTURE , lecture};
};

export const fetchAddCourse = (actions, title, lectureId) => {
	let course =
		  {
		    title: title,
		    id: Math.random(0, 30),
		    lectureId : lectureId,
		    goals: [
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
],
	
		attachments: [
		{id: 0, name : "att1"},
		{id: 1, name : "att2"},
		{id: 2, name : "att3"},
		]
		  };
		  
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.addCourse(course);
			resolve(course);
		}, 1000);
	});
};
export const addCourse = (course) => {
	
	return { type: types.ADD_COURSE , course};
};

export const loadAbout = (option) => {
	const {type, target} = option;
	let obj = {type: type};
	for(let key in option) {
		switch(key) {
			case "type":
			case "target":
			case "by":
			case "in":
			case "is_load":
				continue;
		}
		obj[key] = option[key];	
	}
	
	return obj;
}

let links = {
	"DOMAIN" : 	"http://daybrush.com/NEXTSTEP/json.php"
}

links[types.GET_LECTURES] = "?file=lectures.json";
links[types.GET_MY_LECTURES] = "?file=mylectures.json";
links[types.GET_COURSES] = "?file=courses.json";
links[types.GET_COURSE] = "?file=course.json";
links[types.GET_PROFESSOR] = "?file=professor.json";
links["GET_COMMENTS"] = "?file=comments.json";


export const fetchAbout = (actions, option) => {
	const {type, value, target, by, is_load} = option;
	
	let _type = (type+"_" + target).toUpperCase();
	option.type = _type;
	if(_type in links) {
		let method = option.method || "GET";
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		
		let info = {
			method: method,
			headers : myHeaders,
		};
		let link = links.DOMAIN + links[_type];
		if(option.body ) {
			if(method === "GET") {
				link += "&" + option.body;			
			} else {
				info.body = option.body;
			}
		}

		
		return fetch(link, info).then((res) => {console.log(res);return res.json()}).then((json) => {
			json.type = _type;
			actions.loadAbout(json);
			return json;
		});	
	}
	
	actions.loadAbout(option);
}



export const swap = (target, myPosition, targetPosition) => {
	return {type: ("SWAP_" + target).toUpperCase(), myPosition, targetPosition};
}


export const fetchSwap = (actions, target, id, targetId) => {
	let obj = {
		swap:[id, targetId]
	}
	
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve(obj);
		}, 1000);
	});	
	
	
}