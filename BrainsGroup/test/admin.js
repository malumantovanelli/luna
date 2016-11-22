'use strict';

var Poll = require('./poll');

module.exports = {
    createAccount: function() {
        this.username = '';
        this.email = '';
        this.polls = [];
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
    hasPolls:function(){
       if(this.polls){
           return true;
       }
       else{
           return false;
       }
    },
    getPolls: function(){
        var tam = this.polls.length;
        if(tam === null){
            console.log('Nao ha polls')
            //return null;
        }
        else{
            console.log('Quantidade de polls igual a: ' + tam);
            while(tam != 0){
                console.log(this.polls[tam]);
                tam--;
            };
            //return this.polls;
        }
    },
    getCodeForPoll: function(id){
        var i = 0;
        for(i; i < this.polls.length; i++){
            if(this.polls[i].getQuestion() === id){
                return this.polls[i].getCode();
            }
        }
        return null;
    },
    setPolls: function(pollQuestion){
        this.polls.push(Poll.createPoll(pollQuestion));
    }
};