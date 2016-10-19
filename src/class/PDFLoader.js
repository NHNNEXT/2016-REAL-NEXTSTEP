
export default class PDFLoader {
fileName = "";
pdfFile = "";
textContentsElements = {};
pages = {};
scale = 1;


constructor(fileName) {
	this.fileName = fileName;
}
addZoom = () => {
	this.zoom(this.scale + 0.2);
}
minusZoom = () => {
	this.zoom(this.scale - 0.2);
}
zoom = (scale) => {
	this.scale = scale;
	for(let pageNumber in this.pages) {
		this.pages[pageNumber].zoom(scale);
	}
}

_loadPage = (pageNumber, pageElem) => {
	const page = this.pages[pageNumber];
	page.render();
}
loadPage = (pageNumber, pageElem) => {
	const self = this;
	
	if(this.pages[pageNumber]) {
		this._loadPage(pageNumber, pageElem);
		return;
	}
	this.pdfFile.getPage(pageNumber).then(function (page) {
		self.pages[pageNumber] = new PDFPage(pageNumber, pageElem, page);
		self._loadPage(pageNumber, pageElem);
	});

}
init = () => {
	const self = this;
	return window.PDFJS.getDocument(this.fileName).then(pdf => {
	    self.pdfFile = pdf;
	    
	    return pdf;
    });
	
}
	
}




class PDFPage {
	scale = 1;
	textContent
	textContentsText;
	pageNumber = 1;
	page = "";
	pageElem = "";
	constructor(pageNumber, pageElem, page) {
		this.pageNumber = pageNumber;
		this.page = page;
		this.pageElem = pageElem;
	}
	zoom(scale = this.scale) {
		this.scale = scale;
		
		this.render();
	}
	_renderTextLayer = (textLayerElem) => {
		//pageElem.appe
		if(textLayerElem.children.length === 0)
			textLayerElem.innerHTML = this.textContentsText;
			
			
		textLayerElem.style.transform = "scale(" + this.scale +")";
	}
	renderTextLayer = (textLayerElem, viewport, textContent) => {
      let textDivs = [];
      let textLayerFrag = document.createDocumentFragment();
      let textLayerRenderTask = window.PDFJS.renderTextLayer({
        textContent: textContent,
        container: textLayerFrag,
        viewport: viewport,
        textDivs: textDivs,
      });
      textLayerRenderTask.promise.then(() => {
        textLayerElem.appendChild(textLayerFrag);
        this.textContentsText = textLayerElem.innerHTML;
      });



      }
	render(scale = this.scale) {
		const self = this;
		const page = this.page;
		const pageElem = this.pageElem;
		
		
		const viewport = page.getViewport(scale);
		
	
		const canvas = pageElem.querySelector('.canvas-layer');
		const context = canvas.getContext('2d');
		const {width, height} = viewport;
		canvas.width = width;
		canvas.height = height;
		
		pageElem.style.width = width +"px";
		pageElem.style.height = height +"px";
		
		const renderContext = {
			canvasContext: context,
			viewport: viewport
		};
		
		
		let textLayerElem = pageElem.querySelector(".text-layer");		
		if(this.textContentsText) {
			this._renderTextLayer(textLayerElem);
		} else {
			page.getTextContent().then(function (textContent) {
				self.renderTextLayer(textLayerElem, viewport, textContent);
			});
		}
		page.render(renderContext);	
	}
}
