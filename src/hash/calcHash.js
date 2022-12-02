import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
    try {
        const hash = createHash("sha256").update(filePath).digest("hex");
        console.log(hash);
        // const readStream = createReadStream(filePath);
        // let readContent = "";

        // readStream.on("data", (chunk) => {
        //     readContent += chunk;
        // });

        // readStream.on("error", (err) => {
        //     throw new Error("Calculation operation failed!");
        // });

        // readStream.on("end", () => {
        //     const hash = createHash("sha256").update(readContent).digest("hex");
        //     console.log(hash);
        // });
    } catch (e) {
        throw new Error("Calculation operation failed!");
    }
};

await calculateHash();
