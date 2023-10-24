import { stat } from "node:fs/promises";
import { resolve } from "node:path";

import { execa } from "execa";
import { findUp } from "find-up";

/**
 * @param {object} [options]
 * @param {string} [options.cwd=process.cwd()]
 * @param {string} [options.testDir="tests"]
 */
export async function tests({ cwd = process.cwd(), testDir = "tests" } = {}) {
  const gitDir = await findUp(".git", { cwd, type: "directory" });
  const root = gitDir ? resolve(gitDir, "..", testDir) : resolve(cwd, testDir);

  try {
    await stat(root);
  } catch {
    throw new Error(`"${root}" does not exist`);
  }

  const result = await execa("vitest", process.argv.slice(2), {
    stdio: "inherit",
    serialization: "advanced",
    cwd: root,
    reject: false,
  });

  if (result.exitCode !== 0) {
    process.exit(result.exitCode);
  }
}
