const readlineSync = require('readline-sync');
const state = require("./state")

function robot(){
    const content = {
        functionality: chooseFunctionality(),
        site: whichWebsite(),
    };
    state.save(content);
}

function chooseFunctionality(){
    const options = ['Pegar título do site', 'Autenticar no site'];
    const index = readlineSync.keyInSelect(options, 'Escolha uma funcionalidade do Puppeteer:');
    
    if (index === -1) {
        console.log('Operação cancelada pelo usuário.');
        process.exit(1);
    }

    return options[index];
}

function whichWebsite(){
    return readlineSync.question("Qual a url do site? ")
}

module.exports = robot;