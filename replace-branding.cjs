const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

walkDir("./src", (filePath) => {
  if (
    filePath.endsWith(".tsx") ||
    filePath.endsWith(".ts") ||
    filePath.endsWith(".css") ||
    filePath.endsWith(".md")
  ) {
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    content = content.replace(/IMAM ESTUDIO/g, "RAFIQUE ESTUDIO");
    content = content.replace(/Imam Estudio/g, "Rafique Estudio");
    content = content.replace(/IMAM/g, "RAFIQUE");

    // Also replace references to Malik Janzaib if there are any that should be M. Jahanzaib Awan.
    // The user said: M. Jahanzaib Awan, Founder & Full-Stack Engineer at Rafique Estudio
    content = content.replace(/Malik Janzaib/g, "M. Jahanzaib Awan");
    content = content.replace(/Malik/g, "M. Jahanzaib");

    if (content !== original) {
      console.log(`Updated ${filePath}`);
      fs.writeFileSync(filePath, content, "utf8");
    }
  }
});
