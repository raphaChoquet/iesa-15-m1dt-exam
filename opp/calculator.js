function Calculator ()
{
	this.result = 0;
}

Calculator.prototype = {
	add: function (nbr) {
		if(this.add.arguments.length != 1) {
			throw "Accepte only one argument";
		}

		nbr = Number(nbr);
		if (isNaN(nbr)) {
			throw "Accepte only number";
		} 
		this.result += parseInt(nbr);

	},
	minus: function (nbr) {

	},
	divide: function (nbr) {

	}, 
	multiply: function (nbr) {

	}
}
