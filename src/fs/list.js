import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files");

const list = async () => {
    try {
        const existPath = await stat(filePath)
            .then(() => true)
            .catch(() => false);
        if (existPath) {
            const files = await readdir(filePath);
            console.log(files);
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error("FS operation failed!");
    }
};

await list();
