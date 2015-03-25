
var enigma = new Enigma();
function decryptHtml(DOMElement) {
	if (DOMElement.hasChildNodes()) {
		browseChild(DOMElement);
	} else if (DOMElement.nodeType == DOMElement.TEXT_NODE && DOMElement.textContent.trim() != '') {
		DOMElement.textContent = enigma.decrypt(DOMElement.textContent);
	}
}

function browseChild(DOMElement){
	var child = DOMElement.childNodes;
	for (var i = 0; i < child.length; ++i) {
		decryptHtml(child[i]);
	}
}		



decryptHtml(document.body);