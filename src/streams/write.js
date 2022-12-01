import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fileToWrite.txt");

const write = async () => {
    try {
        let writeStream = createWriteStream(filePath);
        process.stdin.on("data", (data) => {
            writeStream.write(data);
        });
        writeStream.on("error", (err) => {
            throw new Error("Filed to write file!");
        });
    } catch (e) {
        throw new Error("Filed to write file!");
    }
};

await write();
