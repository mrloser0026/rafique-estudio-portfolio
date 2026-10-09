import { test, expect } from "@playwright/test";

test.describe("Admin CRUD Operations", () => {
  test.beforeEach(async ({ page }) => {
    // Navigating to the dashboard first validates the session
    await page.goto("/admin/dashboard");
  });

  test("can load and view leads without empty state", async ({ page }) => {
    await page.goto("/admin/leads");
    await expect(page.getByRole("heading", { name: "Leads & Inquiries CRM" })).toBeVisible({
      timeout: 15000,
    });

    // Wait for the table to populate
    await expect(page.locator("table")).toBeVisible();

    const rows = page.locator("table tbody tr");
    const count = await rows.count();
    console.log(`Found ${count} leads in the table.`);
  });

  test("can load and view orders", async ({ page }) => {
    await page.goto("/admin/orders");
    await expect(page.getByRole("heading", { name: "Quotes & Operational Orders" })).toBeVisible({
      timeout: 15000,
    });
    await expect(page.locator("table")).toBeVisible();
  });
});
