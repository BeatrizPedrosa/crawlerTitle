const robots ={
    input: require ("./bots/input.js"),
    crawler: require("./bots/crawler.js"),
    state: require("./bots/state.js")
}

async function start(){
    robots.input();
    const content = robots.state.load();
    console.log(content.site);
    content.title = await robots.crawler.crawlerTitle(content.site);
    console.log(content.title);
    robots.state.save(content);
}

start();