# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-write.spec.ts >> Admin Destructive / Write Workflows >> Create, edit, and delete a Service safely
- Location: e2e\admin-write.spec.ts:13:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input').first()

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - main [ref=f1e2]:
    - generic [ref=f1e3]:
      - complementary [ref=f1e4]:
        - generic [ref=f1e5]:
          - generic [ref=f1e6]: RAFIQUE ESTUDIOOS
          - link "View Live Public Site" [ref=f1e7] [cursor=pointer]:
            - /url: /
        - navigation [ref=f1e12]:
          - link "Dashboard" [ref=f1e13] [cursor=pointer]:
            - /url: /admin/dashboard
          - link "Global Settings" [ref=f1e20] [cursor=pointer]:
            - /url: /admin/settings
          - link "Navigation" [ref=f1e25] [cursor=pointer]:
            - /url: /admin/navigation
          - link "Pages" [ref=f1e29] [cursor=pointer]:
            - /url: /admin/pages
          - link "Services" [ref=f1e34] [cursor=pointer]:
            - /url: /admin/services
          - link "Projects" [ref=f1e40] [cursor=pointer]:
            - /url: /admin/projects
          - link "Theme Editor" [ref=f1e45] [cursor=pointer]:
            - /url: /admin/theme-editor
          - link "Leads CRM" [ref=f1e53] [cursor=pointer]:
            - /url: /admin/leads
          - link "Orders & Quotes" [ref=f1e60] [cursor=pointer]:
            - /url: /admin/orders
          - link "Media Library" [ref=f1e65] [cursor=pointer]:
            - /url: /admin/media
          - link "SEO Manager" [ref=f1e71] [cursor=pointer]:
            - /url: /admin/seo
          - link "Staff & RBAC" [ref=f1e76] [cursor=pointer]:
            - /url: /admin/staff
          - link "Audit Logs" [ref=f1e81] [cursor=pointer]:
            - /url: /admin/audit-logs
        - generic [ref=f1e87]:
          - paragraph [ref=f1e89]: malikshahzaib1809@gmail.com
          - button "Sign Out" [ref=f1e90]
      - generic [ref=f1e95]:
        - generic [ref=f1e96]: Production Active
        - main [ref=f1e100]:
          - generic [ref=f1e101]:
            - generic [ref=f1e102]:
              - generic [ref=f1e103]:
                - heading "Services & Capabilities Manager" [level=1] [ref=f1e104]
                - paragraph [ref=f1e105]: Manage public engineering capabilities and pricing in PostgreSQL.
              - button "New Capability" [ref=f1e106]
            - generic [ref=f1e109]:
              - table [ref=f1e110]:
                - rowgroup [ref=f1e111]:
                  - row [ref=f1e112]:
                    - columnheader [ref=f1e113]
                    - columnheader "Order" [ref=f1e114]
                    - columnheader "Title" [ref=f1e115]
                    - columnheader "Category" [ref=f1e116]
                    - columnheader "Starting Price" [ref=f1e117]
                    - columnheader "Featured" [ref=f1e118]
                    - columnheader "Published" [ref=f1e119]
                    - columnheader "Actions" [ref=f1e120]
                - rowgroup [ref=f1e121]:
                  - row [ref=f1e122]:
                    - cell [ref=f1e123]:
                      - button [ref=f1e124]
                    - cell "1" [ref=f1e132]
                    - cell "Themes/Plugins Installation /themes-plugins-installation" [ref=f1e133]:
                      - generic [ref=f1e134]: Themes/Plugins Installation
                      - generic [ref=f1e135]: /themes-plugins-installation
                    - cell "Engineering" [ref=f1e136]
                    - cell "Custom" [ref=f1e137]
                    - cell [ref=f1e138]
                    - cell "Published" [ref=f1e141]
                    - cell [ref=f1e142]:
                      - generic [ref=f1e143]:
                        - button [ref=f1e144]
                        - button [ref=f1e147]
                  - row [ref=f1e151]:
                    - cell [ref=f1e152]:
                      - button [active] [ref=f1e153]
                    - cell "1" [ref=f1e161]
                    - cell "E2E Test Service 1791499535168 /e2e-service-1791499535168" [ref=f1e162]:
                      - generic [ref=f1e163]: E2E Test Service 1791499535168
                      - generic [ref=f1e164]: /e2e-service-1791499535168
                    - cell "Shopify Commerce" [ref=f1e165]
                    - cell "$3500" [ref=f1e166]
                    - cell [ref=f1e167]
                    - cell "Published" [ref=f1e170]
                    - cell [ref=f1e171]:
                      - generic [ref=f1e172]:
                        - button [ref=f1e173]
                        - button [ref=f1e176]
                  - row [ref=f1e180]:
                    - cell [ref=f1e181]:
                      - button [ref=f1e182]
                    - cell "2" [ref=f1e190]
                    - cell "Website Builders Design /website-builders-design" [ref=f1e191]:
                      - generic [ref=f1e192]: Website Builders Design
                      - generic [ref=f1e193]: /website-builders-design
                    - cell "Engineering" [ref=f1e194]
                    - cell "Custom" [ref=f1e195]
                    - cell [ref=f1e196]
                    - cell "Published" [ref=f1e199]
                    - cell [ref=f1e200]:
                      - generic [ref=f1e201]:
                        - button [ref=f1e202]
                        - button [ref=f1e205]
                  - row [ref=f1e209]:
                    - cell [ref=f1e210]:
                      - button [ref=f1e211]
                    - cell "3" [ref=f1e219]
                    - cell "Automations & Agents /automations-agents" [ref=f1e220]:
                      - generic [ref=f1e221]: Automations & Agents
                      - generic [ref=f1e222]: /automations-agents
                    - cell "Engineering" [ref=f1e223]
                    - cell "Custom" [ref=f1e224]
                    - cell [ref=f1e225]
                    - cell "Published" [ref=f1e228]
                    - cell [ref=f1e229]:
                      - generic [ref=f1e230]:
                        - button [ref=f1e231]
                        - button [ref=f1e234]
                  - row [ref=f1e238]:
                    - cell [ref=f1e239]:
                      - button [ref=f1e240]
                    - cell "4" [ref=f1e248]
                    - cell "Full Stack Web Applications /full-stack-web-applications" [ref=f1e249]:
                      - generic [ref=f1e250]: Full Stack Web Applications
                      - generic [ref=f1e251]: /full-stack-web-applications
                    - cell "Engineering" [ref=f1e252]
                    - cell "Custom" [ref=f1e253]
                    - cell [ref=f1e254]
                    - cell "Published" [ref=f1e257]
                    - cell [ref=f1e258]:
                      - generic [ref=f1e259]:
                        - button [ref=f1e260]
                        - button [ref=f1e263]
              - status [ref=f1e267]
  - region "Notifications alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Admin Destructive / Write Workflows', () => {
  4  |   const timestamp = Date.now();
  5  |   const testServiceTitle = `E2E Test Service ${timestamp}`;
  6  |   const testProjectTitle = `E2E Test Project ${timestamp}`;
  7  |   const testLeadName = `E2E Test Lead ${timestamp}`;
  8  | 
  9  |   test.beforeEach(async ({ page }) => {
  10 |     await page.goto('/admin/dashboard');
  11 |   });
  12 | 
  13 |   test('Create, edit, and delete a Service safely', async ({ page }) => {
  14 |     // 1. Create Service
  15 |     await page.goto('/admin/services');
  16 |     await page.getByRole('button', { name: 'New Capability' }).click();
  17 |     await page.locator('input').nth(0).fill(testServiceTitle);
  18 |     await page.locator('input').nth(1).fill(`e2e-service-${timestamp}`);
  19 |     await page.getByRole('button', { name: 'Save Service' }).click();
  20 |     await expect(page.locator(`text=${testServiceTitle}`)).toBeVisible();
  21 | 
  22 |     // 2. Edit Service
  23 |     const serviceRow = page.locator('tr').filter({ hasText: testServiceTitle });
  24 |     await serviceRow.locator('button').first().click(); // Edit button
> 25 |     await page.locator('input').nth(0).fill(testServiceTitle + ' Edited');
     |                                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  26 |     await page.getByRole('button', { name: 'Save Service' }).click();
  27 |     await expect(page.locator(`text=${testServiceTitle} Edited`)).toBeVisible();
  28 | 
  29 |     // 3. Delete Service
  30 |     page.once('dialog', dialog => dialog.accept());
  31 |     await serviceRow.locator('button').nth(1).click(); // Delete button
  32 |     await expect(page.locator(`text=${testServiceTitle} Edited`)).not.toBeVisible();
  33 |   });
  34 | 
  35 |   test('Create, edit, and delete a Project safely', async ({ page }) => {
  36 |     await page.goto('/admin/projects');
  37 |     await page.getByRole('button', { name: 'New Project' }).click();
  38 |     await page.locator('input').nth(0).fill(testProjectTitle);
  39 |     await page.locator('input').nth(1).fill(`e2e-project-${timestamp}`);
  40 |     await page.getByRole('button', { name: 'Save Project' }).click();
  41 |     await expect(page.locator(`text=${testProjectTitle}`)).toBeVisible();
  42 | 
  43 |     const projectRow = page.locator('tr').filter({ hasText: testProjectTitle });
  44 |     await projectRow.locator('button').first().click();
  45 |     await page.locator('input').nth(0).fill(testProjectTitle + ' Edited');
  46 |     await page.getByRole('button', { name: 'Save Project' }).click();
  47 |     await expect(page.locator(`text=${testProjectTitle} Edited`)).toBeVisible();
  48 | 
  49 |     page.once('dialog', dialog => dialog.accept());
  50 |     await projectRow.locator('button').nth(1).click();
  51 |     await expect(page.locator(`text=${testProjectTitle} Edited`)).not.toBeVisible();
  52 |   });
  53 | 
  54 | });
  55 | 
```