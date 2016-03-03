


var calculator = {                  //  One OBJECT with THREE FUNCTIONS
		sum: 0,
		add: function(value) {
        this.sum += value;
        },
        clear: function() {
        this.sum = 0;
        },
        equals: function() {
        return this.sum;
        }
};


//  to use the OBJECT:

//  calculator.add(2)
//  calculator.clear()