import path from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files/script.js");

const spawnChildProcess = async (args) => {
    const child = fork(filePath, args.slice(2));

    child.on("exit", (code) => console.log(`Child process exited. Code: ${code}`));
};

spawnChildProcess(process.argv);
