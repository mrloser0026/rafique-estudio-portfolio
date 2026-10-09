const fs = require("fs");
const files = ["src/lib/public.functions.ts", "src/lib/admin.functions.ts"];
for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, "utf-8");
    content = content.replace(/\.inputValidator\(/g, ".validator(");
    fs.writeFileSync(file, content, "utf-8");
    console.log("Fixed", file);
  }
}
