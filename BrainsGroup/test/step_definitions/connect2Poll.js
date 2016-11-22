'use strict';

var Connection = require('../connection');
var User = require('../participant');

module.exports = function () {
    //O metodo request connection que ira
    //buscar no banco todos os codigos de polls existentes e retornar a conexao
    //com exito ou mensagem de erro.

    this.Given(/^that user have an access code$/, function (callback) {
        if(User.hasCode() === true){
            console.log("Usuario tem uma chave de acesso.")
        }
        else{
            console.log("Usuario nao possui chave de acesso.")
        }
     callback();
     });

    this.When(/^user enters the code "([^"]*)"$/, function (arg1, callback) {
        //dado o codigo entrado sera passado a uma funcao que ira buscar no sistema
        //todos os codigos existentes, se achar um que corresponda realiza a conexao
        //senao retorna um erro
        var check = Connection.requestConnection(arg1);
        //o ideal era usar check na funcao abaixo, mas nao estou conseguindo
        // usar variaveis globais
        if (check !== null){
            console.log("Codigo Correto. Conexao Realizada.")
        }
        else{
            console.log("Nao foi encontrado nenhum poll valido com esse codigo.")
        }
        callback();
    });

    this.Then(/^show them a question to be answered$/, function (callback) {
        //se na etapa acima for resolvido com sucesso ira existir um poll
        //logo, tera uma pergunta a ser exibida.
        var poll = Connection.getPollConnected();
        if(poll){
            poll.getQuestion();
        }
        else{
            console.log("Nenhum poll encontrado.");
        }

        callback();
     });

    //nao esta pegando variavel global. Angular tem que configurar.
}