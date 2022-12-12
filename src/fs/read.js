import { readFile, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fileToRead.txt");

const read = async () => {
    try {
        const existPath = await stat(filePath)
            .then(() => true)
            .catch(() => false);
        if (existPath) {
            const text = await readFile(filePath, { encoding: "utf8" });
            console.log(text);
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error(e);
    }
};

await read();
