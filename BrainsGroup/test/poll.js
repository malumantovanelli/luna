'use strict';

module.exports = {
    createPoll: function(question) {
        this.question = question;
        this.code = this.generateCode();
        this.answers = [];
        console.log('Poll criado.');
        return this;
    },
    getQuestion: function () {
        console.log('Pergunta:' + this.question);
    },
    getCode: function(){
        return this.code;
    },
    generateCode: function () {
        //lembrar de partilhar a chave
        return Math.random().toString(36).slice(2);
    },
    getAnswers: function(){
        var tam = this.answers.length;
        if(tam === null){
            /*console.log('Nao ha respostas');*/
            return null;
        }
        else{
            /*console.log('Quantidade de respostas igual a: ' + tam);
            while(tam != 0){
                console.log(this.answers[tam]);
                tam--;
            };*/
            return this.answers;
        }
    },
    setAnswer: function(answer){
        this.answers.push(answer);
        console.log('Resposta recebida.');
    }
};