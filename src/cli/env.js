const env = process.env;

const parseEnv = () => {
    const rssEnv = Object.entries(env)
        .filter((el) => el[0].includes("RSS_"))
        .map((el) => `${el[0]}=${el[1]}`)
        .join("; ");
    console.log(rssEnv);
};

parseEnv();
