import { cpus } from "os";
import { Worker } from "worker_threads";
const systemCpuCores = cpus();
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "worker.js");

const performCalculations = async () => {
    try {
        let num = 10;
        const workerPromises = [];
        const createWorker = (number) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(filePath, { workerData: { num: number } });

                worker.on("message", (result) => {
                    resolve({ status: "resolved", data: result });
                });

                worker.on("error", (error) => {
                    reject({ status: "error", data: null });
                });
            });
        };
        systemCpuCores.forEach(() => {
            workerPromises.push(createWorker(num++));
        });

        const workersResult = await Promise.allSettled(workerPromises);
        const result = workersResult.map((el) => el.reason || el.value);
        console.log(result);
    } catch (e) {
        throw new Error(e);
    }
};

await performCalculations();
