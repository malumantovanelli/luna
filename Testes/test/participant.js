'use strict';

var Poll = require('./poll');

module.exports = {
    createAccount: function() {
        this.username = '';
        this.email = '';
        this.pollCodes = [];
        console.log('Conta criada.');
        return this;
    },
    getName: function () {
        return this.username;
    },
    setName: function(name){
        this.username = name;
    },
    getEmail: function () {
        return this.email;
    },
    setEmail: function(mail){
        this.email = mail;
    },
    hasCode: function(){
        if(this.pollCodes){
            return true;
        }
        else return false;
    },
    getPollCodes: function(){
        var tam = this.pollCodes.length;
        if(tam === null){
            console.log('Nao ha nenhum codigo cadastrado.');
            //return null;
        }
        else{
            console.log('Quantidade de codigos igual a: ' + tam);
            while(tam != 0){
                console.log(this.pollCodes[tam]);
                tam--;
            };
            //return this.pollCodes;
        }
    },
    setPolls: function(pollQuestion){
        this.polls.push(Poll.createPoll(pollQuestion));
    }
};