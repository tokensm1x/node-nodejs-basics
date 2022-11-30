import { Transform, pipeline } from "stream";

const transform = async () => {
    try {
        const readData = process.stdin;
        const writeData = process.stdout;

        const transformData = new Transform({
            transform(chunk, enc, cb) {
                const reversedString = chunk.toString().split("").reverse().join("");

                cb(null, reversedString + "\n");
            },
        });

        pipeline(readData, transformData, writeData, (err) => {
            throw new Error("Filed to transform data!");
        });
    } catch (e) {
        throw new Error("Filed to transform data!");
    }
};

await transform();
