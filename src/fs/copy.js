import { stat, copyFile, readdir, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filesPath = path.join(__dirname, "files");
const copiedFilesPath = path.join(__dirname, "files_copy");

const copy = async () => {
    let isMainFolderExists = false;
    let isCopiedFolderExists = false;

    await stat(filesPath)
        .then(() => {
            isMainFolderExists = true;
        })
        .catch(() => {
            isMainFolderExists = false;
        });

    if (isMainFolderExists) {
        await stat(copiedFilesPath)
            .then(() => {
                isCopiedFolderExists = true;
            })
            .catch(() => {
                isCopiedFolderExists = false;
            });
        if (isCopiedFolderExists) {
            throw new Error("FS operation failed!");
        } else {
            try {
                const files = await readdir(filesPath);
                await mkdir(copiedFilesPath);
                files.forEach((el) => {
                    const filePath = path.join(filesPath, el);
                    const fileCopiedPath = path.join(copiedFilesPath, el);
                    copyFile(filePath, fileCopiedPath);
                });
            } catch (e) {
                throw new Error("FS operation failed!");
            }
        }
    } else {
        throw new Error("FS operation failed!");
    }
};

copy();
