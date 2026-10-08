const { execSync } = require("child_process");
const fs = require("fs");

const envFile = fs.readFileSync(".env", "utf8");
const lines = envFile.split("\n");

for (const line of lines) {
  if (!line.trim() || line.startsWith("#")) continue;
  const [key, ...rest] = line.split("=");
  const value = rest.join("=").trim();
  if (key && value) {
    console.log(`Setting ${key}...`);
    try {
      execSync(`npx vercel env rm ${key} production -y`);
    } catch (e) {}
    try {
      execSync(`npx vercel env rm ${key} preview -y`);
    } catch (e) {}
    try {
      execSync(`npx vercel env rm ${key} development -y`);
    } catch (e) {}

    execSync(`echo "${value}" | npx vercel env add ${key} production`);
    execSync(`echo "${value}" | npx vercel env add ${key} preview`);
    execSync(`echo "${value}" | npx vercel env add ${key} development`);
  }
}
console.log("Environment variables synced.");
