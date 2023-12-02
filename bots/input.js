const readlineSync = require('readline-sync');
const state = require("./state")

function robot(){
    const content = {
        site: qualSite(),
        title: ""
    };
    state.save(content);
}

function qualSite(){
    return readlineSync.question("Qual a url do site? ")
}

module.exports = robot;