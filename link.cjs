const { spawn } = require("child_process");
const child = spawn("npx.cmd", ["vercel", "link"], { cwd: process.cwd(), shell: true });
child.stdout.on("data", (data) => {
  const rawStr = data.toString();
  const str = rawStr.replace(/\x1b\[[0-9;]*m/g, "");
  process.stdout.write(rawStr);
  if (str.includes("Set up")) {
    child.stdin.write("y\n");
  } else if (str.includes("Which scope do you want to deploy to?")) {
    child.stdin.write("\n");
  } else if (str.includes("Link to existing project?")) {
    child.stdin.write("y\n");
  } else if (str.includes("What’s the name of your existing project?")) {
    child.stdin.write("rafique-estudio-portfolio\n");
  }
});
child.stderr.on("data", (data) => process.stderr.write(data.toString()));
child.on("close", (code) => console.log("Process exited with code", code));
