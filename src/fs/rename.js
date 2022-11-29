import { rename } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/wrongFilename.txt");
const newFilePath = path.join(__dirname, "/files/properFilename.md");

const renameFile = async () => {
    try {
        if (existsSync(filePath) && !existsSync(newFilePath)) {
            rename(filePath, newFilePath);
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error("FS operation failed!");
    }
};

await renameFile();
