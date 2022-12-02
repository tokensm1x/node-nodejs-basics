import { unlink, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fileToRemove.txt");

const remove = async () => {
    try {
        const existPath = await stat(filePath)
            .then(() => true)
            .catch(() => false);
        if (existPath) {
            unlink(filePath);
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error(e);
    }
};

await remove();
