A3 OVERLAY — EXISTING WEBDEV-CLIENT PROJECT

This ZIP is NOT a standalone project. Unzip it into your existing A2 codebase
(the folder containing package.json), on a clean `a3` Git branch.

It preserves your current app/labs/lab1 and app/labs/lab2 files, package files,
and existing public assets. It replaces A3 routes, labs TOC/index and selected
Kambaz routes/layouts with data-driven implementations.

On your Mac, if ~/Desktop/webdev-a2-work still has your latest corrected source:

cd ~/Desktop
git clone --branch a2 --single-branch https://github.com/Kishan-prajapati-242/webdev-client.git webdev-a3-clean
cd webdev-a3-clean
git switch -c a3
rsync -a --exclude=.git --exclude=node_modules --exclude=.next "$HOME/Desktop/webdev-a2-work/" ./
unzip -o "$HOME/Downloads/Kishan-WebDev-A3-OVERLAY.zip" -d .
npm ci && npm run build
git add -A && git commit -m "Complete A3 JavaScript and Kambaz data UI" && git push -u origin a3

If the old A2 source folder is no longer present, skip the rsync line but note
that unpushed A2 fixes will then not be restored from that source.

Check /labs/lab3, /labs/lab3/add/12/30, /dashboard, and RS101/RS102
modules, assignments, assignment editors, and people tables locally.
Submit the actual public a3 Vercel branch URL and your repository URL.

VERIFICATION SCOPE:
- Data relationships, required routes, and JSX/TS syntax were statically checked.
- Layout styles were viewed in Chromium using representative static HTML.
- No live Next.js production build, live screenshot, Vercel deployment, or
  course grader run was possible without your actual project/dependencies.
- Official example JSON was reconstructed from the chapter rubric, not
  fetched from the official downloadable database.
- Personal exercises use suggested Kishan-related samples; review them yourself.
