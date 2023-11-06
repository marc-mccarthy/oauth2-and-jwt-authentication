const logger = require("./services/log/")
const database = require("./services/database")
const app = require("./app")
const fs = require("fs");
const https = require("https");
const path = require("path");
const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "./artifacts/cert/key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "./artifacts/cert/cert.pem"))
};

const envValidator = require("./config/config")

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

        https.createServer(httpsOptions, app).listen(PORT, () => {
            logger.info(`Server running on ${backUri}`)
        });
    
    }).catch((err) => {
        logger.error(err)
    })