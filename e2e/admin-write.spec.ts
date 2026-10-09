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
    const modalForm = page.locator('form');
    await modalForm.locator('input').nth(0).fill(testServiceTitle);
    await modalForm.locator('input').nth(1).fill(`e2e-service-${timestamp}`);
    await modalForm.getByRole('button', { name: 'Save Service' }).click({ force: true });
    // wait for modal to disappear or toast
    await expect(page.locator(`text=${testServiceTitle}`).first()).toBeVisible({ timeout: 15000 });

    // 2. Edit Service
    const serviceRow = page.locator('tr').filter({ hasText: testServiceTitle });
    await serviceRow.locator('button').nth(1).click(); // Edit button
    const editModal = page.locator('form');
    await editModal.locator('input').nth(0).fill(testServiceTitle + ' Edited');
    await editModal.getByRole('button', { name: 'Save Service' }).click({ force: true });
    await expect(page.locator(`text=${testServiceTitle} Edited`).first()).toBeVisible({ timeout: 15000 });

    // 3. Delete Service
    page.once('dialog', dialog => dialog.accept());
    await serviceRow.locator('button').nth(2).click(); // Delete button
    await expect(page.locator(`text=${testServiceTitle} Edited`)).not.toBeVisible();
  });

  test('Create, edit, and delete a Project safely', async ({ page }) => {
    await page.goto('/admin/projects');
    await page.getByRole('button', { name: 'New Case Study' }).click();
    const modalForm = page.locator('form');
    await modalForm.locator('input').nth(0).fill(testProjectTitle);
    await modalForm.locator('input').nth(1).fill(`e2e-project-${timestamp}`);
    await modalForm.getByRole('button', { name: 'Save Project' }).click({ force: true });
    await expect(page.locator(`text=${testProjectTitle}`).first()).toBeVisible({ timeout: 15000 });

    const projectRow = page.locator('tr').filter({ hasText: testProjectTitle });
    await projectRow.locator('button').nth(1).click(); // Edit button
    const editModal = page.locator('form');
    await editModal.locator('input').nth(0).fill(testProjectTitle + ' Edited');
    await editModal.getByRole('button', { name: 'Save Project' }).click({ force: true });
    await expect(page.locator(`text=${testProjectTitle} Edited`).first()).toBeVisible({ timeout: 15000 });

    page.once('dialog', dialog => dialog.accept());
    await projectRow.locator('button').nth(2).click(); // Delete button
    await expect(page.locator(`text=${testProjectTitle} Edited`)).not.toBeVisible();
  });

});
