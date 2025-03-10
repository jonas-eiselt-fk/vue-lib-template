const path = require("path");
const isCI = require("is-ci");
const { Extractor, ExtractorConfig } = require("@microsoft/api-extractor");

async function apiExtractor() {
    if (isCI) {
        console.log("Running API Extractor in CI mode");
    } else {
        console.log("Running API Extractor in local mode");
    }

    const filePath = path.join(process.cwd(), "api-extractor.json");
    const config = ExtractorConfig.loadFileAndPrepare(filePath);
    const result = Extractor.invoke(config, {
        localBuild: !isCI,
        showVerboseMessages: true,
    });

    if (result.succeeded) {
        console.log(`API Extractor completed successfully`);
        process.exitCode = 0;
    } else {
        const { errorCount, warningCount } = result;
        console.error(
            [
                "API Extractor completed with",
                `${errorCount} error(s) and ${warningCount} warning(s)`,
            ].join("\n"),
        );
        process.exitCode = 1;
    }
}

apiExtractor().catch((err) => {
    /* eslint-disable-next-line no-console -- expected to log */
    console.error(err);
    process.exitCode = 1;
});