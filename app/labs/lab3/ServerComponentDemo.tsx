import fs from "node:fs";
import path from "node:path";

export default function ServerComponentDemo() {
  const labDirectory = path.join(process.cwd(), "app", "labs", "lab3");
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(labDirectory)
      .filter((name) => !name.startsWith("."))
      .slice(0, 25);
  } catch (error) {
    console.error("Could not read Lab 3 files:", error);
  }

  const platform = process.platform;
  const nodeVersion = process.version;
  const serverRenderTime = new Date().toLocaleTimeString();
  const arch = process.arch;
  const pid = process.pid;

  return (
    <div id="wd-server-component">
      <h5>Server Information</h5>
      <pre>{JSON.stringify({ platform, nodeVersion, serverRenderTime, arch, pid }, null, 2)}</pre>
      <p>Server files:</p>
      <ul>
        {fileNames.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}
