(function (window) {
  var greetr = function (firstname, lastname, language) {
    return new greetr.init(firstname, lastname, language);
  };

  var supportedLang = ['en', 'pl', 'es'];

  var greetings = {
    pl: 'Witaj',
    en: 'Hello',
    es: 'Hola'
  };

  var informalGeet = {
    pl: 'Cześć',
    en: 'Hi',
    es: 'Buenas'
  };

  var info = {
    pl: 'Informacja',
    en: 'Message',
    es: 'Mensaje'
  };

  function isSupportedLang (lang) {
      if(supportedLang.indexOf(lang) === -1) {
        return supportedLang[0];
      }
      return lang;
  }

  greetr.prototype = {
    fullName: function () {
      return this.firstname + ' ' + this.lastname;
    },
    greeting: function (type) {
      var greet = greetings[this.language];
      if (!type) {
        greet = informalGeet[this.language];        
      }
      return greet + ' ' + this.fullName();
    },
    setLang: function (lang) {
      this.language = isSupportedLang(lang);
      return this;
    },
    getLang: function () {
      return this.language;
    },
    getType: function () {
      return this.type || false;
    },
    greet: function (type) {
      var msg = info[this.language] + ': ';
      msg += this.greeting(type);
      this.msg = msg;
      this.type = type || false;
      return this;
    },
    toText: function () {
      return this.msg;
    },
    toHtmlElem: function (selector) {
      if (!$) {
        throw 'Jquery not loaded!';
      } else {
        $(selector).text(this.msg);
      }
    }
    
  };

  greetr.init = function (firstname, lastname, language) {
    
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.language = isSupportedLang(language);
   
    return this;
  };

  greetr.init.prototype = greetr.prototype;
  window.Greetr = window.$G = greetr;

})(window);
