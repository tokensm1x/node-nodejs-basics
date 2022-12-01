const args = process.argv.slice(2);

const parseArgs = () => {
    const argsStrings = args.reduce((acc, el, i) => {
        if (el.includes("--")) {
            return (acc += `${el.replace("--", "")} is `);
        } else {
            return i === args.length - 1 ? (acc += el) : (acc += `${el}, `);
        }
    }, "");
    console.log(argsStrings);
};

parseArgs();
