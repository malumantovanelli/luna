'use strict';

var Connection = require('../connection');
var User = require('../participant');

module.exports = function () {
    this.Given(/^that the poll "([^"]*)" is active$/, function (arg, callback) {
        var check = Connection.requestConnection(arg);
        if (check !== null){
            console.log("Codigo Correto. Conexao Realizada.")
        }
        else{
            console.log("Nao foi encontrado nenhum poll valido com esse codigo.")
        }
        callback();
    });

    this.When(/^a user sends an answer$/, function (callback) {
        var poll = Connection.getPollConnected();
        poll.setAnswer("Teste Resposta.")
        callback();
    });

    this.Then(/^admin receives that answer immediately in a chart$/, function (callback) {
        var poll = Connection.getPollConnected();
        var answer = poll.getAnswers();
        console.log(answer);
        callback();
    });

}