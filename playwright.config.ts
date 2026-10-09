import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:8080",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "public",
      testMatch: /public-site\.spec\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "admin",
      testMatch: /admin-.*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/admin.json",
      },
    },
  ],
  webServer: {
    command: "bun run dev --port 8080 --strictPort",
    url: "http://localhost:8080",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
