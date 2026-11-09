# CS5610 A4 source overlay — installation and verification

This ZIP **does not contain a Git repository**. Apply it to a clean checkout of the existing `a3` branch of `Kishan-prajapati-242/webdev-client`. It replaces only the included files and preserves the remaining A1–A3 project. Do not unzip it into an unrelated repository, and do not work in the old corrupted `webdev-a2-work` folder.

## 1. Set up the same repository on a fresh A4 branch

Open Terminal on your Mac:

```bash
cd "$HOME/Desktop"
git clone --branch a3 --single-branch https://github.com/Kishan-prajapati-242/webdev-client.git webdev-a4-work
cd "$HOME/Desktop/webdev-a4-work"
git switch -c a4
```

If `webdev-a4-work` already exists, do **not** overwrite it: inspect that directory and choose a different clean folder name. Do not delete any existing project.

Download `CS5610_A4_Source_Overlay.zip` into Downloads and run:

```bash
unzip -o "$HOME/Downloads/CS5610_A4_Source_Overlay.zip" -d .
npm install
npm run build
```

`npm install` is necessary to update `package-lock.json` for the added Zustand, Redux Toolkit, and React-Redux dependencies. The ZIP intentionally does not include a guessed lockfile. **If `npm install` or `npm run build` fails, do not push.** Fix the actual error first.

## 2. Run the website and inspect it

Start the site:

```bash
npm run dev
```

Open http://localhost:3000/labs/lab4 and http://localhost:3000/dashboard. Also check at least:

- /labs, /labs/lab1, /labs/lab2, /labs/lab2/tailwind, /labs/lab3
- /labs/lab4, /labs/lab4/hooks
- /labs/lab4/url-encoding/query-params?a=3&b=4
- /labs/lab4/url-encoding/path-params/12/30
- /dashboard
- /courses/RS101/home, /courses/RS101/modules, /courses/RS102/modules
- /courses/RS101/assignments, /courses/RS101/assignments/A101
- /courses/RS101/people/table
- /account/signin, /account/signup, /account/profile

Verify UI at normal desktop and narrow mobile widths. In the Dashboard, add, edit, update, and delete a sample course; in Modules, create, rename, and delete a module; test assignment Save and Cancel and deletion; sign in as demo user `ada` with password `123`, then open Profile using the Kambaz Account sidebar. Signed-out Profile should show **no user's details**. Test enroll/unenroll after signing in. Changes are in browser memory until a later server chapter.

### Automated browser audit (optional, recommended)

Open a **second** Terminal while `npm run dev` stays running. In the project folder, run:

```bash
npm install --no-save playwright
npx playwright install chromium
node scripts/a4-visual-audit.mjs http://localhost:3000
```

The script visits 19 routes at desktop and mobile sizes, writes 38 full-page screenshots, measures horizontal overflow and broken images, and checks important interactions. Its screenshots and JSON results go to `a4-visual-audit/`. Review **the screenshots themselves**; an automated pass cannot guarantee good layout.

For an additional structural check:

```bash
node scripts/a4-static-audit.mjs
```

## 3. Commit and push only after successful build and checks

Stop your local dev server with Control+C, then:

```bash
git status
git add -A
git commit -m "Implement A4 client state and Kambaz CRUD"
git push -u origin a4
```

In the existing Vercel project, find the deployment whose hostname contains `-git-a4-`; confirm it is `Ready`, loads without Vercel authentication, and matches your latest commit. Re-run the visual audit against its **actual** URL:

```bash
node scripts/a4-visual-audit.mjs 'https://YOUR-REAL-A4-DEPLOYMENT.vercel.app' a4-vercel-audit
```

Only after deployment and checks work, enter the `a4` GitHub branch URL and that public Vercel preview URL on https://kambaz.dev/assignments/a4, select **Run**, inspect every failed row, and **Submit**. Run is *not* submission.

## Verification status when ZIP was generated

- Confirmed via GitHub connector: upstream `a3` exists; `a4` did not exist at inspection time.
- The GitHub integration returned `403 Resource not accessible by integration` when trying to create `a4`; no branch was created remotely.
- Checked the A4 assignment at https://kambaz.dev/assignments/a4 and the full Chapter 4 exercise lists at https://kambaz.dev/book/ch4.
- The source overlay passed 21 source-level requirements checks and all 29 new TS/TSX source files passed TypeScript *syntax parsing*. These are **not equivalent to a typecheck**.
- **Not done here:** actual npm dependency installation, production `next build`, browser interaction run, visual review of a running A4 page, Vercel deployment, the course-site auto-grader, or submission. The execution environment could not clone GitHub or install npm packages from the network. Do not report these as completed.
- Full-credit scoring is **not confirmed**. Report problems from the real build and browser tests before submitting.

## Design decisions

The code reuses A3's layout, cards, navigation, JSON sample data and SVG assets. Shared courses/modules/assignments/enrollments are in Zustand stores; Account uses React Context; local input drafts use `useState`; Redux Toolkit is used only for Lab 4 literacy. A4 does not overwrite `a3`, `a2`, or `main` branches.
