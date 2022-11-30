import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fileToRead.txt");

const read = async () => {
    try {
        const readStream = createReadStream(filePath);
        let readContent = "";

        readStream.on("data", (chunk) => {
            readContent += chunk;
        });

        readStream.on("error", (err) => {
            throw new Error("Filed to read file!");
        });

        readStream.on("end", () => {
            process.stdout.write(readContent);
        });
    } catch (e) {
        throw new Error("Filed to read file!");
    }
};

await read();
