const fs = require("node:fs");

fs.readFile("data.json", (err, data) => {
    if (err===null) {
        const json = JSON.parse(data);
        let maxValue=0;
        for (const current of json) {
            if (current.rate>maxValue) {
                maxValue=current.rate;
            }
        } 
                
        const output="Максимальний курс : " +maxValue;

        fs.writeFile("output.txt", output, (err) => {
            if (err===null) {
                console.log("Максимальний курс : " + maxValue);
            } else {
                console.log(err);
            }
        });
    } else {
        console.log("ERROR of reading file");
    }
});
