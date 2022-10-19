const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

export const CreateAccessToken = (user) => {
    return jwt.sign
        (
            {
                id: user.id,
                email: user.email,
                type: user.type
            },

            process.env.ACCESS_TOKEN,
            {
                expiresIn: "300s"
            }
        )
};

export const CreateRefreshToken = (user) => {
    return jwt.sign
        (
            {
                id: user.id,
                email: user.email,
                type: user.type
            },

            process.env.REFRESH_TOKEN,
            {
                expiresIn: "1800s"
            }
        )
}