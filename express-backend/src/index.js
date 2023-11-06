const logger = require("./services/log/")
const database = require("./services/database")
const app = require("./app")
const fs = require("fs");
const https = require("https");
const path = require("path");
const envValidator = require("./config/config")
const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "./artifacts/cert/localhost-ecc-key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "./artifacts/cert/localhost-ecc-cert.pem"))
};

logger.info("Checking configuration...")
envValidator.validateServerConfiguration()
envValidator.validateDatabaseConfiguration()
envValidator.validateAuthConfiguration()

logger.info("Deploying server...")

database.connect()
    .then(() => {
        logger.info("Database succesfully connected")

        const PORT = process.env.BACK_PORT
        const backUri = `https://${process.env.BACK_HOST}:${PORT}`

        // https.createServer(httpsOptions, app).listen(PORT, () => {
        //     logger.info(`Server running on ${backUri}`);
        // });

        https.createServer(httpsOptions, app).listen(PORT, () => {
            logger.info(`Server running on ${backUri}`);
          });
    
    }).catch((err) => {
        logger.error(err)
    })