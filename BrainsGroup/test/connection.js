'use strict';

var Poll = require('./poll');

module.exports = {
    setConnection: function(poll){
        this.poll = poll;
    },
    requestConnection: function (userCode) {
        var polltest = Poll.createPoll('Teste');
        //Na versao correta vai varrer o repo e ir comparando com a chave recebida.
        if (polltest.getCode() === userCode) {
            console.log("Conexao realizada com sucesso.")
            //criar o metodo da conexao.
            this.setConnection(polltest);
        }
        else {
            console.log("O codigo informado nao corresponde a nenhum poll ativo.")
            return null;
        }
    },
    getPollConnected: function(){
        //TEMPORARIO, quando existir coisas criadas retirar.
        if(!this.poll){
            var polltest = Poll.createPoll('Teste');
        }
        return polltest;
    }

};