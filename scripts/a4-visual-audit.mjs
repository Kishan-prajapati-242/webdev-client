/* Run after installing Playwright and starting Next. Captures every checked route. */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const output = process.argv[3] || "a4-visual-audit";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const routes = [
  "/labs", "/labs/lab1", "/labs/lab2", "/labs/lab2/tailwind", "/labs/lab3",
  "/labs/lab4", "/labs/lab4/hooks",
  "/labs/lab4/url-encoding/path-params/12/30",
  "/labs/lab4/url-encoding/query-params?a=3&b=4",
  "/dashboard", "/courses/RS101/home", "/courses/RS101/modules",
  "/courses/RS102/modules", "/courses/RS101/assignments",
  "/courses/RS101/assignments/A101", "/courses/RS101/people/table",
  "/account/signin", "/account/signup", "/account/profile",
];
const report = { base, routeChecks: [], interactions: [], errors: [] };
function assertion(name, passed, detail = "") {
  report.interactions.push({ name, passed: !!passed, detail });
  if (!passed) report.errors.push(`${name}: ${detail}`);
}
const safe = (path) => path.replace(/[/?&=]+/g, "_").replace(/^_/, "") || "home";
for (const [view, size] of Object.entries({ desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } })) {
  const page = await browser.newPage({ viewport: size, deviceScaleFactor: 1 });
  const exceptions = [];
  page.on("pageerror", (error) => exceptions.push(error.message));
  for (const route of routes) {
    const record = { view, route, status: 0, heading: "", overflow: false, brokenImages: [], errors: [] };
    try {
      const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle", timeout: 30000 });
      record.status = response?.status() ?? 0;
      record.heading = await page.locator("h1,h2").first().textContent().catch(() => "");
      record.overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 4);
      record.brokenImages = await page.locator("img").evaluateAll((images) => images.filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute("src")));
      await page.screenshot({ path: `${output}/${view}_${safe(route)}.png`, fullPage: true });
    } catch (error) { record.errors.push(String(error)); }
    record.errors.push(...exceptions.splice(0));
    if (record.status !== 200 || record.overflow || record.brokenImages.length || record.errors.length) {
      report.errors.push(`${view} ${route}: ${JSON.stringify(record)}`);
    }
    report.routeChecks.push(record);
  }
  await page.close();
}
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("dialog", async (dialog) => {
  if (dialog.type() === "prompt") await dialog.accept("Visual audit module");
  else await dialog.accept();
});
try {
  await page.goto(`${base}/labs/lab4`, { waitUntil: "networkidle" });
  assertion("Lab 4 has >=15 titled examples", await page.locator("#wd-lab4 h3").count() >= 15);
  assertion("Lab 4 has >=15 buttons", await page.locator("#wd-lab4 button").count() >= 15);
  assertion("Lab 4 has 4 counters", await page.locator("#wd-lab4 h4").filter({ hasText: /counter:/ }).count() >= 4);
  assertion("Lab 4 has a boolean checkbox", await page.locator("#wd-lab4 input[type=checkbox]").count() >= 1);
  assertion("Lab 4 has date input", await page.locator("#wd-lab4 input[type=date]").count() >= 1);
  assertion("Object state shows JSON", (await page.locator("#wd-object-state").innerText()).includes('"city"'));
  const stringInput = page.getByLabel("String first name");
  await stringInput.fill("Audited");
  assertion("Controlled string updates output", await page.getByText("Typed name: Audited Prajapati").isVisible());
  assertion("Array list has Delete buttons", await page.getByRole("button", { name: "Delete" }).count() >= 3);
  assertion("Zustand list has Edit/Delete", await page.locator("#wd-zustand-todo-title").isVisible());
  assertion("Redux list has Edit/Delete", await page.locator("#wd-redux-todo-title").isVisible());
  await page.goto(`${base}/labs/lab4/url-encoding/path-params/12/30`);
  assertion("Path params compute 42", await page.getByText("12 + 30 = 42").isVisible());

  await page.goto(`${base}/dashboard`, { waitUntil: "networkidle" });
  assertion("Initial dashboard has >=3 course cards", await page.locator(".wd-dashboard-course").count() >= 3);
  assertion("Four-field dashboard course form", await page.locator("#wd-course-form input,#wd-course-form textarea").count() >= 4);
  await page.locator("#wd-course-name").fill("QA Test Course");
  await page.locator("#wd-course-number").fill("QA999");
  await page.locator("#wd-add-course").click();
  assertion("Add course creates card", await page.getByRole("heading", { name: "QA Test Course" }).isVisible());
  const qa = page.locator(".wd-dashboard-course").filter({ hasText: "QA Test Course" });
  await qa.getByRole("button", { name: "Edit" }).click();
  assertion("Edit loads course form", await page.locator("#wd-course-name").inputValue() === "QA Test Course");
  await page.locator("#wd-course-name").fill("QA Course Updated");
  await page.locator("#wd-update-course").click();
  assertion("Update changes card", await page.getByRole("heading", { name: "QA Course Updated" }).isVisible());
  await page.locator(".wd-dashboard-course").filter({ hasText: "QA Course Updated" }).getByRole("button", { name: "Delete" }).click();
  assertion("Delete removes card", await page.getByRole("heading", { name: "QA Course Updated" }).count() === 0);

  await page.goto(`${base}/courses/RS101/modules`, { waitUntil: "networkidle" });
  assertion("Module add control exists", await page.locator("#wd-add-module").isVisible());
  await page.locator("#wd-add-module").click();
  assertion("Add module updates list", await page.getByRole("heading", { name: "Visual audit module" }).isVisible());
  await page.getByRole("button", { name: "Delete Visual audit module" }).click();
  assertion("Delete module removes entry", await page.getByRole("heading", { name: "Visual audit module" }).count() === 0);

  await page.goto(`${base}/courses/RS101/assignments`, { waitUntil: "networkidle" });
  await page.locator("#wd-add-assignment").click();
  await page.locator("#wd-name").fill("Visual audit assignment");
  await page.locator("#wd-save").click();
  await page.waitForURL(/\/assignments$/);
  assertion("Assignment save creates row", await page.getByText("Visual audit assignment").isVisible());
  await page.getByRole("button", { name: "Delete Visual audit assignment" }).click();
  assertion("Assignment delete removes row", await page.getByText("Visual audit assignment").count() === 0);

  await page.goto(`${base}/account/signin`, { waitUntil: "networkidle" });
  assertion("Sign in is a form with password", await page.locator("#wd-signin-screen input[type=password]").count() === 1);
  await page.locator("#wd-signin-btn").click();
  await page.waitForURL(/\/dashboard$/);
  await page.locator("#wd-account-link").click();
  assertion("Signed-in profile contains user fields", await page.locator("#wd-firstname").isVisible());
} catch (error) { report.errors.push(`Interaction audit crashed: ${String(error)}`); }
await page.close();
await browser.close();
report.summary = { screenshotCount: report.routeChecks.length, routeFailures: report.routeChecks.filter((r) => r.status !== 200 || r.overflow || r.brokenImages.length || r.errors.length).length, interactionFailures: report.interactions.filter((r) => !r.passed).length, passed: report.errors.length === 0 };
await writeFile(`${output}/report.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.summary, null, 2));
console.log(`Screenshots and detailed report: ${output}`);
process.exitCode = report.summary.passed ? 0 : 1;
