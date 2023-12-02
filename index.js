const robots ={
    input: require ("./bots/input.js"),
    crawlerTitle: require("./bots/crawlerTitle.js"),
    state: require("./bots/state.js"),
    crawlerAuth: require("./bots/crawlerAuth.js"),
    inputAuth: require ("./bots/inputAuth.js")
}

async function start(){
    robots.input();
    const content = robots.state.load();

    if (content.functionality === "Pegar título do site"){
        content.title = await robots.crawlerTitle.getWebsiteTitle(content.site);
    }
    if (content.functionality === "Autenticar no site"){
        robots.inputAuth();
        await robots.crawlerAuth.loginToSite(content.site, content.login, content.pass);
    }
    //content.title = await robots.crawlerAuth.getWebsiteTitle(content.site);
    robots.state.save(content);
    console.log(content);
}

start();