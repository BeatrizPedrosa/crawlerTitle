const readlineSync = require('readline-sync');
const state = require("./state")

function robot(){
    const content = {
        login: askLogin(),
        pass: askPass(),
    };
    state.save(content);
}

function askLogin(){
    return readlineSync.question('Login: ');
}

function askPass(){
    return readlineSync.question('Senha: ');
}

module.exports = robot;