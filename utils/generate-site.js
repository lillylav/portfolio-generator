// modularize file systems functions

// import npm file systems package
const fs = require('fs');

// write HTML file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Portfolio created successfully!'
            });
        });    
    });
};

// copy CSS to dist file when new HTML is created
const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/css/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });    
    });
};

// export to main app
module.exports = { writeFile, copyFile };