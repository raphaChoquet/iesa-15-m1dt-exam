function Calculator ()
{
	this.result = 0;
}

Calculator.prototype = {
	add: function (nbr) {
		this.checkIsOneArgument(this.add.arguments);

		nbr = Number(nbr);
		this.checkIsNumber(nbr);
		
		this.result += nbr;

	},
	minus: function (nbr) {

	},
	divide: function (nbr) {

	}, 
	multiply: function (nbr) {

	},
	checkIsOneArgument: function (args) {
		if(args.length != 1) {
			throw "Accepte only one argument";
		}
		return true;
	},

	checkIsNumber: function(nbr) {
		if (isNaN(nbr)) {
			throw "Is not a number";
		} 
		return true;
	}
}
