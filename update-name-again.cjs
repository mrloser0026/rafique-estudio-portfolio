const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function replaceInFiles(dir) {
    walkDir(dir, function(filePath) {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.md')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;
            
            // Replace "Jahanzaib Rafique" with "M. Jahanzaib Rafique"
            content = content.replace(/Jahanzaib Rafique/g, 'M. Jahanzaib Rafique');
            
            // Fix double M. if it accidentally got prepended (M. M. Jahanzaib Rafique)
            content = content.replace(/M\. M\. Jahanzaib Rafique/g, 'M. Jahanzaib Rafique');

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    });
}

replaceInFiles('./src');
console.log('Code replacements completed.');
