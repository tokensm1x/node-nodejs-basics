import { stat, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fresh.txt");
const text = "I am fresh and young";

const create = async () => {
    let isFileExists = false;
    await stat(filePath)
        .then(() => {
            isFileExists = true;
        })
        .catch(() => {
            isFileExists = false;
        });

    if (!isFileExists) {
        writeFile(filePath, text)
            .then(() => {
                console.log("File created!");
            })
            .catch(() => {
                throw new Error("FS operation failed!");
            });
    } else {
        throw new Error("FS operation failed!");
    }
};

await create();
