import { copyFile, readdir, mkdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, "files");
const copiedFilesPath = path.join(__dirname, "files_copy");

const copy = async () => {
    try {
        const existPath = await stat(filesPath)
            .then(() => true)
            .catch(() => false);
        const existCopiedPath = await stat(copiedFilesPath)
            .then(() => true)
            .catch(() => false);
        if (existPath && !existCopiedPath) {
            const files = await readdir(filesPath);
            await mkdir(copiedFilesPath);
            files.forEach((el) => {
                const filePath = path.join(filesPath, el);
                const fileCopiedPath = path.join(copiedFilesPath, el);
                copyFile(filePath, fileCopiedPath);
            });
        } else {
            throw new Error("FS operation failed!");
        }
    } catch (e) {
        throw new Error(e);
    }
};

copy();
