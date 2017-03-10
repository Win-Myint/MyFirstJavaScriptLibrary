// Use IIFE to secure my code so it doesn't collide with other libraries
// Safe code increase REUSABLITIY of the library
(function(global, $){

	// Set up a function with 3 arguments
	// The function should return a funciton constructor
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	// Useful method goes here
	Greetr.prototype = {};

	// Use function constructor to generat an object with some properties
	Greetr.init = function(firstName, lastName, language) {

		var self = this;
		self.firstName = firstName || '';
		self.lastName  = lastName || '';
		self.language  = language || 'en';
	}

	// .prototype is just a property available for Greetr.init function constructor
	// .prototype is not Greetr.init's prototype, its own prototype sit on __proto__
	Greetr.init.prototype = Greetr.prototype;

	// Add Greetr to global object and give an alias
	global.Greetr = global.G$ = Greetr;

}(window, jQuery));


