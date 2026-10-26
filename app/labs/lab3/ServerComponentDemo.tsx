import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export default function ServerComponentDemo() {
  // Read the Lab 3 directory rather than tracing the entire project root.
  const labDirectory = path.join(process.cwd(), "app", "labs", "lab3");
  const fileNames = fs.readdirSync(labDirectory).filter(name => !name.startsWith(".")).slice(0, 25);

  return (
    <div id="wd-server-component">
      <h5>Server Information</h5>
      <p>platform: {process.platform}</p>
      <p>arch: {os.arch()}</p>
      <p>pid: {process.pid}</p>
      <p>Node version: {process.version}</p>
      <p>Server files:</p>
      <ul>{fileNames.map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}
