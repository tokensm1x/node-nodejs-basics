import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fileToCompress.txt");
const compressedFilePath = path.join(__dirname, "/files/archive.gz");

const compress = async () => {
    try {
        const readFile = createReadStream(filePath);
        readFile
            .pipe(createGzip())
            .pipe(createWriteStream(compressedFilePath))
            .on("finish", () => {
                console.log(`File compressed!`);
            })
            .on("error", (e) => {
                console.log(e);
                throw new Error("Filed to compress file!");
            });
    } catch (e) {
        console.log(e);
        throw new Error("Filed to compress file!");
    }
};

await compress();
