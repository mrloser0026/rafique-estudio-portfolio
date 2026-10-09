import { test, expect } from "@playwright/test";

test.describe("Admin Panel End-to-End Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigating to the dashboard first validates the session
    await page.goto("/admin/dashboard");
  });

  test("Dashboard loads and displays metrics", async ({ page }) => {
    // Wait for the auth check to complete
    await expect(page.getByRole("heading", { name: "Executive Dashboard" })).toBeVisible({ timeout: 20000 });
    await expect(page.locator("text=Total Leads").first()).toBeVisible({ timeout: 20000 });
    await expect(page.locator("text=Paid Revenue").first()).toBeVisible({ timeout: 20000 });
  });

  test("Leads CRM displays leads and allows status updates", async ({ page }) => {
    await page.goto("/admin/leads");
    await expect(page.getByRole("heading", { name: "Leads & Inquiries CRM" })).toBeVisible({
      timeout: 15000,
    });
    await expect(page.locator("table")).toBeVisible();
  });

  test("Orders module displays orders correctly", async ({ page }) => {
    await page.goto("/admin/orders");
    await expect(page.getByRole("heading", { name: "Quotes & Operational Orders" })).toBeVisible({
      timeout: 15000,
    });
    await expect(page.locator("table")).toBeVisible();
  });

  test("Services can be viewed", async ({ page }) => {
    await page.goto("/admin/services");
    await expect(
      page.getByRole("heading", { name: "Services & Capabilities Manager" }),
    ).toBeVisible({ timeout: 15000 });
  });

  test("Projects can be viewed", async ({ page }) => {
    await page.goto("/admin/projects");
    await expect(page.getByRole("heading", { name: "Case Studies & Work Manager" })).toBeVisible({
      timeout: 15000,
    });
  });

  test("Theme Editor / Sections load", async ({ page }) => {
    await page.goto("/admin/theme-editor");
    await expect(page.getByRole("heading", { name: "Visual Theme & Section Editor" })).toBeVisible({
      timeout: 15000,
    });
  });

  test("Pages configuration loads", async ({ page }) => {
    await page.goto("/admin/pages");
    await expect(page.getByRole("heading", { name: "Page Builder & CMS Pages" })).toBeVisible({
      timeout: 15000,
    });
  });

  test("Navigation configuration loads", async ({ page }) => {
    await page.goto("/admin/navigation");
    await expect(page.getByRole("heading", { name: "Navigation Manager" })).toBeVisible({
      timeout: 15000,
    });
  });

  test("Media library loads", async ({ page }) => {
    await page.goto("/admin/media");
    await expect(page.getByRole("heading", { name: "Media Asset Library" })).toBeVisible({
      timeout: 15000,
    });
  });

  test("SEO settings loads", async ({ page }) => {
    await page.goto("/admin/seo");
    await expect(page.getByRole("heading", { name: "Global & Page-Level SEO" })).toBeVisible({
      timeout: 15000,
    });
  });

  test("Audit logs load", async ({ page }) => {
    await page.goto("/admin/audit-logs");
    await expect(
      page.getByRole("heading", { name: "Security & Mutation Audit Trail" }),
    ).toBeVisible({ timeout: 15000 });
  });

  test("Global settings loads", async ({ page }) => {
    await page.goto("/admin/settings");
    await expect(page.getByRole("heading", { name: "Global Settings" })).toBeVisible({
      timeout: 15000,
    });
  });
});
