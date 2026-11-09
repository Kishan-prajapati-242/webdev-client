import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
const root = process.cwd();
const walk = (dir) => readdirSync(dir).flatMap((entry) => {
  const full = join(dir, entry);
  return statSync(full).isDirectory() ? walk(full) : [full];
});
const files = walk(join(root, 'app')).filter((p) => /\.(ts|tsx)$/.test(p));
const missing = [];
const checks = [];
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  for (const match of src.matchAll(/from\s+["'](\.{1,2}\/[^"']+)["']/g)) {
    const target = resolve(dirname(file), match[1]);
    const knownA3 = [
      '/app/(kambaz)/database',
      '/app/(kambaz)/courses/[cid]/Navigation',
    ];
    const isBaselineImport = knownA3.some((known) => target.endsWith(known));
    if (!isBaselineImport && ![target, `${target}.tsx`, `${target}.ts`, `${target}.json`, join(target, 'index.ts'), join(target, 'index.tsx')].some(existsSync)) missing.push(`${file} -> ${match[1]}`);
  }
}
const text = (path) => readFileSync(join(root, path), 'utf8');
function check(name, condition) { checks.push({ name, passed: !!condition }); }
const lab = text('app/labs/lab4/page.tsx');
const state = text('app/labs/lab4/StateExamples.tsx');
const stores = text('app/labs/lab4/StoresExamples.tsx');
const dash = text('app/(kambaz)/dashboard/page.tsx');
const module = text('app/(kambaz)/courses/[cid]/modules/page.tsx');
const signin = text('app/(kambaz)/account/signin/page.tsx');
const nav = text('app/(kambaz)/account/Navigation.tsx');
const profile = text('app/(kambaz)/account/profile/page.tsx');
check('All relative imports resolve within overlay or baseline', missing.length === 0);
check('Lab 4 has >15 example components', (lab.match(/<\w+\s*\/>/g) ?? []).length >= 15);
check('Lab has counter sections', lab.includes('LocalCounter') && lab.includes('SharedParentCounter') && lab.includes('ZustandCounter') && lab.includes('ReduxExamples'));
check('Boolean, string, date, object and array state samples', ['BooleanState','StringState','DateState','ObjectState','ArrayState'].every((id) => lab.includes(id)));
check('City in controlled object', state.includes('city:') && state.includes('"city"'));
check('Zustand and Redux todo lists', stores.includes('function ZustandTodos') && stores.includes('function ReduxTodos'));
check('Path parameter page', existsSync(join(root, 'app/labs/lab4/url-encoding/path-params/[a]/[b]/page.tsx')));
check('Query parameter page', existsSync(join(root, 'app/labs/lab4/url-encoding/query-params/page.tsx')));
check('Course form and Add / Update', dash.includes('wd-course-form') && dash.includes('wd-add-course') && dash.includes('wd-update-course'));
check('Course number + start date', dash.includes('wd-course-number') && dash.includes('wd-course-start-date'));
check('Edit/Delete each course', text('app/(kambaz)/dashboard/CourseCard.tsx').includes('Edit') && text('app/(kambaz)/dashboard/CourseCard.tsx').includes('Delete'));
check('Module Add/Edit/Delete', ['wd-add-module','FaPencilAlt','FaTrash'].every((id) => module.includes(id)));
check('Sign in fields + real submit', signin.includes('wd-signin-btn') && signin.includes('type="password"') && signin.includes('onSubmit={submit}'));
check('Account navigation hides Profile while signed out', nav.includes('currentUser ?') && nav.includes('"profile"'));
check('Profile does not expose details signed out', profile.includes('if (!currentUser || !draft)'));
check('Course modules shared via store', text('app/(kambaz)/courses/[cid]/home/page.tsx').includes('useModulesStore'));
check('Assignment CRUD via Zustand', text('app/(kambaz)/store/assignmentsStore.ts').includes('create<AssignmentsState>'));
check('Enrollments via Zustand', text('app/(kambaz)/store/enrollmentsStore.ts').includes('create<EnrollmentState>'));
check('Labs page name and GitHub link', text('app/labs/page.tsx').includes('Kishan Shaileshkumar Prajapati') && text('app/labs/page.tsx').includes('wd-github'));
check('Lab 4 in Labs TOC', text('app/labs/TOC.tsx').includes('wd-lab4-link'));
check('Dependencies declared', ['zustand', '@reduxjs/toolkit', 'react-redux'].every((dep) => Object.hasOwn(JSON.parse(text('package.json')).dependencies, dep)));
console.log(JSON.stringify({ checked: checks.length, passed: checks.filter((c) => c.passed).length, failed: checks.filter((c) => !c.passed), missing }, null, 2));
if (checks.some((c) => !c.passed)) process.exitCode = 1;
