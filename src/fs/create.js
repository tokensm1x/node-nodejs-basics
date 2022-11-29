import { stat, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const filePath = path.dirname(__filename) + "/files/fresh.txt";
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
                throw new Error("Can't create file!");
            });
    } else {
        throw new Error("File exists!");
    }
};

await create();
