'use strict';

var Admin = require('../admin');

module.exports = function () {
    var contaTeste = Admin.createAccount();

    this.Given(/^that there is a poll$/, function (callback) {
       var check = contaTeste.hasPolls();
       callback();
    });

    this.When(/^the admin requires a code for poll "([^"]*)"$/, function (arg, callback) {
     var code = contaTeste.getCodeForPoll("Teste");
     if(code !== null){
      console.log("Codigo adquirido.")
     }
     else{
      console.log('Este poll nao foi criado.');
     }
     callback();
    });

    this.Then(/^a unique code is given for that poll$/, function (callback) {
     var code = contaTeste.getCodeForPoll("Teste");
     console.log(code);
      callback();
    });
}