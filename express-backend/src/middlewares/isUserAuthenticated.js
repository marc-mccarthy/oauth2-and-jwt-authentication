
const logger = require("../services/log")
const CONST = require("../utils/constants")
const jwt = require("jsonwebtoken")


const isUserAuthenticated = (request, response, next) => {

    logger.debug("Verifying JWT...")

    const jwtToken = request.cookies.jwt
    console.log(`***** JWT TOKEN: ${JSON.stringify(jwtToken, null, 2)}`);
    jwt.verify(jwtToken, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            logger.error(`Error during JWT verification: ${err}`)
            let error = {
                status: CONST.httpStatus.UNAUTHORIZED,
                message: "err: You must login first!"
            }
            next(error)
        } else {
            let { email } = decodedToken
            logger.info(`Successful JWT verification for user with email [${email}]`)
            next()
        }
    }) 
}

module.exports = isUserAuthenticated