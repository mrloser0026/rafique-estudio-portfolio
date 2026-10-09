import { chromium } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

(async () => {
  console.log("Launching browser for authentication...");
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://localhost:8080/admin/login");
  console.log("\n======================================================");
  console.log("A browser window has been opened.");
  console.log("Please sign in to the admin panel directly in that window.");
  console.log("Waiting for authentication to complete (navigating to /admin/dashboard)...");
  console.log("======================================================\n");

  // Wait indefinitely for the user to log in and be redirected to the dashboard
  await page.waitForURL("**/admin/dashboard", { timeout: 0 });

  const authDir = path.join(process.cwd(), ".auth");
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  await context.storageState({ path: path.join(authDir, "admin.json") });
  await browser.close();

  console.log("Authentication state successfully saved to .auth/admin.json!");
})();
