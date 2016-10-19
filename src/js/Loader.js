export const CSSLoad = (url) => {
	return new Promise(function(resolve, reject) {
		const elem = document.querySelector("[file-url=\""+url+"\"]");
		if(elem) {
			console.log("ALREAY LOADED");
			return;
		}
        var script = document.createElement('link');
        script.href = url;
        script.setAttribute("file-url", url);
        script.setAttribute("rel", "stylesheet");

        script.addEventListener('load', function() {
            resolve(script);
        }, false);
        
         script.addEventListener('error', function() {
            reject(script);
        }, false);
        
        
        
        document.body.appendChild(script);
       })           
            
            
}


export const JSLoad = (url) => {
	return new Promise(function(resolve, reject) {
		const scriptElem = document.querySelector("[file-url=\""+url+"\"]");
		if(scriptElem) {
			console.log("ALREAY LOADED");
			return;
		}
        var script = document.createElement('script');
        script.src = url;
        script.setAttribute("file-url", url);

        script.addEventListener('load', function() {
            resolve(script);
        }, false);
        
         script.addEventListener('error', function() {
            reject(script);
        }, false);
        
        
        
        document.body.appendChild(script);
       })           
            
            
}