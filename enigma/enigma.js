function Enigma() 
{ 	
	var charsDecoded = Array(
		"a", "b", "c", "d", "e", 
		"f", "g", "h", "i", "j", 
		"k", "l", "m", "n", "o", 
		"p", "q", "r", "s", "t",
		"u", "v", "w", "x", "y",
		"z", " ", "'", ".", ",",
		":", ";"
	);

	var charsEncoded = Array(
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
			msgEncrypted += this.encryptChar(chars[i]);
		}
		return msgEncrypted;
	};

	this.decrypt = function (str) {
		var chars = str.split('');
		var msgDecrypted = "";
		for (var i = 0; i < chars.length; ++i) {
			msgDecrypted += this.decryptChar(chars[i]);
		}
		return msgDecrypted;
	};


	this.encryptChar = function (char) {
		var i = charsDecoded.indexOf(char);
		return i !== -1 ? charsEncoded[i] : char;
	};


	this.decryptChar = function (char) {
		var i = charsEncoded.indexOf(char);
		return i !== -1 ? charsDecoded[i] : char;
	};

}
