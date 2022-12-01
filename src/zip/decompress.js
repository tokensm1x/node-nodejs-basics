import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/archive.gz");
const compressedFilePath = path.join(__dirname, "/files/fileToCompress.txt");

const decompress = async () => {
    try {
        const readFile = createReadStream(filePath);
        readFile
            .pipe(createUnzip())
            .pipe(createWriteStream(compressedFilePath))
            .on("finish", () => {
                console.log(`File decompressed!`);
            })
            .on("error", (e) => {
                console.log(e);
                throw new Error("Filed to decompress file!");
            });
    } catch (e) {
        console.log(e);
        throw new Error("Filed to decompress file!");
    }
};

await decompress();
