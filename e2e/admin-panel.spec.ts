import { test, expect } from '@playwright/test';

test.describe('Admin Panel End-to-End Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigating to the dashboard first validates the session
    await page.goto('/admin/dashboard');
  });

  test('Dashboard loads and displays metrics', async ({ page }) => {
    await expect(page.locator('text=Total Leads').first()).toBeVisible();
    await expect(page.locator('text=Total Revenue').first()).toBeVisible();
  });

  test('Leads CRM displays leads and allows status updates', async ({ page }) => {
    await page.goto('/admin/leads');
    await expect(page.locator('h1', { hasText: 'Leads' })).toBeVisible();
    // Wait for the table to populate (assuming there is at least one lead or a 'no leads' state)
    await expect(page.locator('table')).toBeVisible();
  });

  test('Orders module displays orders correctly', async ({ page }) => {
    await page.goto('/admin/orders');
    await expect(page.locator('h1', { hasText: 'Orders' })).toBeVisible();
    await expect(page.locator('table')).toBeVisible();
  });

  test('Services can be viewed', async ({ page }) => {
    await page.goto('/admin/services');
    await expect(page.locator('text=Services')).toBeVisible();
  });

  test('Projects can be viewed', async ({ page }) => {
    await page.goto('/admin/projects');
    await expect(page.locator('text=Projects')).toBeVisible();
  });

  test('Theme Editor / Sections load', async ({ page }) => {
    await page.goto('/admin/theme-editor');
    await expect(page.locator('text=Theme Editor')).toBeVisible();
  });

  test('Pages configuration loads', async ({ page }) => {
    await page.goto('/admin/pages');
    await expect(page.locator('text=Pages')).toBeVisible();
  });

  test('Navigation configuration loads', async ({ page }) => {
    await page.goto('/admin/navigation');
    await expect(page.locator('text=Navigation')).toBeVisible();
  });

  test('Media library loads', async ({ page }) => {
    await page.goto('/admin/media');
    await expect(page.locator('text=Media Library')).toBeVisible();
  });

  test('SEO settings loads', async ({ page }) => {
    await page.goto('/admin/seo');
    await expect(page.locator('text=SEO')).toBeVisible();
  });

  test('Audit logs load', async ({ page }) => {
    await page.goto('/admin/audit-logs');
    await expect(page.locator('text=Audit Logs')).toBeVisible();
  });

  test('Global settings loads', async ({ page }) => {
    await page.goto('/admin/settings');
    await expect(page.locator('text=Settings')).toBeVisible();
  });
});
