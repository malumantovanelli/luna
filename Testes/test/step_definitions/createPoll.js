'use strict';

var Poll = require('../poll');

module.exports = function () {
    var mypoll = {};

    this.Given(/^that admin wants to create a poll$/, function (callback) {
        console.log(Poll);
        //Funcao de Login e validacoes
        callback();
    });

    this.When(/^the admin requires to create a poll$/, function (callback) {
        mypoll = Poll.createPoll('Question?');
        callback();
    });

    this.Then(/^a new poll will be created$/, function (callback) {
        mypoll.getQuestion();
        callback();
    });
};