const dotenv = require("dotenv").config();
const bcryptjs = require("bcryptjs");
const { Users } = require("../../../../db/models");

export default async function handler(req, res) {
    switch (req.method) {
        case "POST": {
            const { userName, pass, key } = req.body;
            try {
                const user = await Users.findOne({
                    where: {
                        userName: userName
                    }
                });
                if (user) {
                    return res.status(200).json({ mess: "Login success!" })
                }
            } catch (error) {
                return res.status(500).json(error)
            }
        }
        default:
            res.status(200).json({ Carousels: "HelloGuy" })
            break;
    }
}