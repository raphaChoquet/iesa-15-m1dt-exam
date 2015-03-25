function Enigma() 
{ 	
	this.charsDecoded = Array(
		"a", "b", "c", "d", "e", 
		"f", "g", "h", "i", "j", 
		"k", "l", "m", "n", "o", 
		"p", "q", "r", "s", "t",
		"u", "v", "w", "x", "y",
		"z", " ", "'", ".", ",",
		":", ";"
	);


	this.charsEncoded = Array(
		"j", "d", "w", "o", "v", 
		"a", "r", "i", "g", " ", 
		"x", "u", "n", "s", "y", 
		"q", "c", "p", "'", "f", 
		"m", "z", "t", "k", "h", 
		"b", "e", "l", ".", ",",
		":", ";"
	);

	this.encrypt = function (str) {
		var chars = str.split('');
		var msgEncrypted = "";
		for (var i = 0; i < chars.length; ++i) {
			var position = this.charsDecoded.indexOf(chars[i]);
			msgEncrypted += this.charsEncoded[i];
		}
		return msgEncrypted;
	};

	this.decrypt = function (str) {
		var chars = str.split('');
		var msgDecrypted = "";
		for (var i = 0; i < chars.length; ++i) {
			var position = this.charsEncoded.indexOf(chars[i]);
			msgDecrypted += this.charsDecoded[i];
		}
		return msgDecrypted;
	};

}

var test = new Enigma();

var msg = test.encrypt("abcdefghijklmnopqrstuvwxyz '.,:;");

console.log(msg);