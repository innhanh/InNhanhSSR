const dotenv = require("dotenv").config();
const bcryptjs = require("bcryptjs");
const { Users } = require("../../../../db/models")

export default async function handler(req, res) {
    switch (req.method) {
        case "POST": {
            const { userName, pass, email, phone, key } = req.body;
            try {
                const oldAdmin = await Users.findOne({
                    where: {
                        userName
                    }
                });
                if (oldAdmin) {
                    return res.status(400).json({ error: "User already exist!" })
                } else {
                    if (key === process.env.KEY_ADMIN) {
                        const salt = bcryptjs.genSaltSync(10);
                        const newPass = bcryptjs.hashSync(pass, salt)
                        const newAdmin = await Users.create({ userName, pass: newPass, email, phone, type: "Admin" });
                        return res.status(201).json({ Admin: newAdmin, mess: "Register Success!" })
                    } else {
                        return res.status(400).json({ error: "KEY_ADMIN wrong!" })
                    }
                }
            } catch (error) {
                return res.status(500).json(error);
            }
        }
        default:
            res.status(200).json({ Mess: "Api from InNhanh79" })
            break;
    }
}