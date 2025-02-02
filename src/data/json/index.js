const fs = require("fs");
const path = require("path");

module.exports = {
    loadData: (filenameJSON)=>{
        const pathJSON = path.join(__dirname,`./${filenameJSON}.json`);
        const dataJSON = fs.readFileSync(pathJSON, "utf-8");
        const dataJS = JSON.parse(dataJSON);
        return dataJS
    }
}