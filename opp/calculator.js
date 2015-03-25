function Calculator ()
{
	this.result = 0;
}

Calculator.prototype = {
	add: function (nbr) {
		this.checkHaveOneArgument(this.add.arguments);

		nbr = Number(nbr);
		this.checkIsNumber(nbr);
		
		this.result += nbr;

	},
	minus: function (nbr) {
		this.checkHaveOneArgument(this.minus.arguments);

		nbr = Number(nbr);
		this.checkIsNumber(nbr);
		
		this.result -= nbr;

	},
	divide: function (nbr) {
		this.checkHaveOneArgument(this.divide.arguments);

		nbr = Number(nbr);
		this.checkIsNumber(nbr);
		
		if (nbr === 0) {
			throw 'Divide by 0 impossible';
		}

		this.result = this.result / nbr;
	}, 
	multiply: function (nbr) {
		this.checkHaveOneArgument(this.multiply.arguments);

		nbr = Number(nbr);
		this.checkIsNumber(nbr);
		
		this.result *= nbr;
	},
	checkHaveOneArgument: function (args) {
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
