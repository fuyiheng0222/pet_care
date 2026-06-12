import { rm } from "node:fs/promises";
import { resolve, relative } from "node:path";

const workspace = process.cwd();
const target = resolve(workspace, ".next");
const relativeTarget = relative(workspace, target);

if (relativeTarget.startsWith("..") || relativeTarget === "") {
  throw new Error(`Refusing to remove path outside the project: ${target}`);
}

await rm(target, { force: true, recursive: true });
console.log("Removed .next cache");
