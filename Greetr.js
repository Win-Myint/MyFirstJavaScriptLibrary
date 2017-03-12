// use IIFE to secure my code so it doesn't collide with other libraries
// safe code increase REUSABLITIY of the library
(function(global, $) {
    
    // Greetr function return a function constructor 'new Greetr.init'
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    // hidden within the scope of the IIFE and never directly accessible
    // however available to Greetr.prototype because of Closure
    var supportedLangs = ['en', 'es', 'bur'];
    
    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        bur: 'မင်္ဂလာပါ'
    };
    
    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        bur: 'မင်္ဂလာပါ'
    };
    
    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión',
        bur: 'Logged in pwit twar pee par'
    };
    
    // prototype holds methods (to save memory space)
    Greetr.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        // chainable methods return their own containing object
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
            
            // make chainable
            return this;
        },
                            
        setLang: function(lang) {
            
            // set the language
            this.language = lang;
        
            // validate
            this.validate();
            
            // make chainable
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            
            // make chainable
            return this;
        }
        
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName  = lastName || '';
        self.language  = language || 'en';
        
        self.validate();
        
    }
    
    // trick borrowed from jQuery so i don't have to use the 'new' keyword
    // .prototype is just a property available for Greetr.init function constructor
    // .prototype is not Greetr.init's prototype, its own prototype sit on __proto__
    Greetr.init.prototype = Greetr.prototype;
    
    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));