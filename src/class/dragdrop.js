
export default class DragDrop {
	constructor() {
		
	}
	clonNode = ""
	
	
	dragstart = (e, parent, content) => {
		console.log(parent, content);
		const {width, height, top, left} = content.getBoundingClientRect();	
		parent.style.width = width  + "px";
		parent.style.height = height  + "px";
		
		this.cloneNode = parent.cloneNode(true);
		document.body.appendChild(this.cloneNode);
		this.cloneNode.style.left = "-1000px";
		this.cloneNode.style.position="absolute";
	
		e.dataTransfer.setDragImage(this.cloneNode, e.clientX - left, e.clientY - top + 40);
	
		this.cloneNode.classList.add("dragmove");
		parent.setAttribute("isDrag", 1);
	
	}
	dragover = (e, parent, content) => {
		e.preventDefault();
	
		const target = document.querySelector("[isDrag='1']")
		
	
		if(target && parent != target) {
			console.log("SWAP");
			let elem = target;
			 do {
	            elem = elem.nextSibling;
	        } while (elem && elem !== parent);
	        
	        const position = elem == parent ? "afterend" : "beforebegin";
	        parent.insertAdjacentElement(position, target);
	        
		}

	}
	dragend = (e, parent, content) => {
		this.cloneNode.remove();
		this.cloneNode = "";
		parent.removeAttribute("isDrag");
	}
}