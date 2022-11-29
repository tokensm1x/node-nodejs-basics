import { writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fresh.txt");
const text = "I am fresh and young";

const create = async () => {
    try {
        if (!existsSync(filePath)) {
            writeFile(filePath, text);
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error("FS operation failed!");
    }
};

await create();
