const fs = require ("fs");
const contentFilePath = "./content.json"

function save(content) {
    let existingContent = load(); 
    existingContent = { ...existingContent, ...content }; 
    const contentString = JSON.stringify(existingContent);
    fs.writeFileSync(contentFilePath, contentString);
}

function load (){
    try {
        const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");
        const contentJson = JSON.parse(fileBuffer);
        return contentJson;
    } catch (error){
        return {};
    }
    
}

module.exports = {
    save,
    load
}