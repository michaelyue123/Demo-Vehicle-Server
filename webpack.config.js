import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const entry = ["./server/index.js"];
export const output = {
  path: path.join(__dirname, "/build"),
  filename: "bundle.js",
};
