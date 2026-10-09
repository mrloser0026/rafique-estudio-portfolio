import { test, expect } from '@playwright/test';

test.describe('Admin Destructive / Write Workflows', () => {
  const timestamp = Date.now();
  const testServiceTitle = `E2E Test Service ${timestamp}`;
  const testProjectTitle = `E2E Test Project ${timestamp}`;
  const testLeadName = `E2E Test Lead ${timestamp}`;

  test.beforeEach(async ({ page }) => {
    await page.goto('/admin/dashboard');
  });

  test('Create, edit, and delete a Service safely', async ({ page }) => {
    // 1. Create Service
    await page.goto('/admin/services');
    await page.getByRole('button', { name: 'New Capability' }).click();
    await page.locator('input').nth(0).fill(testServiceTitle);
    await page.locator('input').nth(1).fill(`e2e-service-${timestamp}`);
    await page.getByRole('button', { name: 'Save Service' }).click();
    await expect(page.locator(`text=${testServiceTitle}`)).toBeVisible();

    // 2. Edit Service
    const serviceRow = page.locator('tr').filter({ hasText: testServiceTitle });
    await serviceRow.locator('button').first().click(); // Edit button
    await page.locator('input').nth(0).fill(testServiceTitle + ' Edited');
    await page.getByRole('button', { name: 'Save Service' }).click();
    await expect(page.locator(`text=${testServiceTitle} Edited`)).toBeVisible();

    // 3. Delete Service
    page.once('dialog', dialog => dialog.accept());
    await serviceRow.locator('button').nth(1).click(); // Delete button
    await expect(page.locator(`text=${testServiceTitle} Edited`)).not.toBeVisible();
  });

  test('Create, edit, and delete a Project safely', async ({ page }) => {
    await page.goto('/admin/projects');
    await page.getByRole('button', { name: 'New Project' }).click();
    await page.locator('input').nth(0).fill(testProjectTitle);
    await page.locator('input').nth(1).fill(`e2e-project-${timestamp}`);
    await page.getByRole('button', { name: 'Save Project' }).click();
    await expect(page.locator(`text=${testProjectTitle}`)).toBeVisible();

    const projectRow = page.locator('tr').filter({ hasText: testProjectTitle });
    await projectRow.locator('button').first().click();
    await page.locator('input').nth(0).fill(testProjectTitle + ' Edited');
    await page.getByRole('button', { name: 'Save Project' }).click();
    await expect(page.locator(`text=${testProjectTitle} Edited`)).toBeVisible();

    page.once('dialog', dialog => dialog.accept());
    await projectRow.locator('button').nth(1).click();
    await expect(page.locator(`text=${testProjectTitle} Edited`)).not.toBeVisible();
  });

});
