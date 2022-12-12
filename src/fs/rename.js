import { rename as renameFile, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/wrongFilename.txt");
const newFilePath = path.join(__dirname, "/files/properFilename.md");

const rename = async () => {
    try {
        const existPath = await stat(filePath)
            .then(() => true)
            .catch(() => false);
        const existPathRenamed = await stat(newFilePath)
            .then(() => true)
            .catch(() => false);
        if (existPath && !existPathRenamed) {
            renameFile(filePath, newFilePath);
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error(e);
    }
};

await rename();
