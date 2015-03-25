function Calculator ()
{
	this.result = 0;
}

Calculator.prototype = {
	add: function (nbr) {
		this.result += parseInt(nbr);
	},
	minus: function (nbr) {

	},
	divide: function (nbr) {

	}, 
	multiply: function (nbr) {

	}
}