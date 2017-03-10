// use IIFE to secure my code so it doesn't collide with other libraries
// safe code increase REUSABLITIY of the library
(function(global, $){

	// set up a function with 3 arguments
	// The function should return a funciton constructor
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	// these variables are not expose to outside world
	// however they are available to Greetr.init function constructor 
	// it's simply because of Closure
	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	// triger logMessages when relative methods is called
	var logMessages = {
		en: 'Logged in',
		es: 'Inició sesión'
	};

	// useful method goes here to save memory spaces and increase efficiency
	Greetr.prototype = {

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		}, 

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw 'Invalid language!';
			}
		},

		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName;
		},

		formalGreetings: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},

		greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
                            
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        }


	};

	// Use function constructor to generat an object and set properties
	Greetr.init = function(firstName, lastName, language) {

		var self = this;
		self.firstName = firstName || '';
		self.lastName  = lastName || '';
		self.language  = language || 'es';
	}

	// .prototype is just a property available for Greetr.init function constructor
	// .prototype is not Greetr.init's prototype, its own prototype sit on __proto__
	Greetr.init.prototype = Greetr.prototype;

	// Add Greetr to global object and give an alias
	global.Greetr = global.G$ = Greetr;

}(window, jQuery));


