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
                    if (bcryptjs.compareSync(pass, user.userName)) {
                        if (key === process.env.KEY_ADMIN) {
                            return res.status(200).json({ mess: "Login success!" })
                        } else {
                            return res.status(400).json({ error: "KEY_ADMIN wrong!" })
                        }
                    } else {
                        return res.status(400).json({ error: "Passworld wrong!" })
                    }
                } else {
                    return res.status(404).json({ error: "User not found!" })
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