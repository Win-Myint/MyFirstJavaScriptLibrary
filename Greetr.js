// use IIFE to secure my code so it doesn't collide with other libraries
(function(global, $) {
    
    // Greetr function return a function constructor 'new Greetr.init'
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    // languages
    var supportedLangs = ['en', 'bur'];
    
    // informal greetings
    var informalGreetings = {
        en: 'Hello',
        bur: 'မင်္ဂလာပါ'
    };
    
    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        bur: 'မင်္ဂလာပါ'
    };
    
    // prototype holds methods (to save memory space)
    Greetr.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
                
        // retrieve messages from object by referring to properties using [] syntax
        informalGreeting: function() {
            return informalGreetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },

        setLang: function(lang) {
            
            // set the language
            this.language = lang;
            
            return this;
        },

        jQueryGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // determine the message
            var msg;
            if(formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.informalGreeting();   
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            
            return this;
        }
        
    };
    
    // the actual "Greetr.init" object is created here
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName  = lastName  || '';
        self.language  = language  || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    // attach Greetr to the global object
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));