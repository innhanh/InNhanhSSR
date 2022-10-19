const { Users } = require("../../../db/models")


export default async function handler(req, res) {
    switch (req.method) {
        case "POST": {
            const { userName, pass, email, phone } = req.body;
            try {
                const user = await Users.findOne({
                    where: {
                        userName: userName
                    }
                });
                if (user) {
                    return res.status(400).json({ error: "User is already exist!" })
                } else {
                    const newUser = await Users.create({
                        userName, pass, email, phone
                    });
                    return res.status(201).json({ user: newUser, mess: "Register Success!" })
                }
            } catch (error) {
                return res.status(500).json(error)
            }
        }
        case "PUT": {
            break;
        }
        case "DELETE": {
            break;
        }
        default:
            res.status(200).json({ Carousels: "HelloGuy" })
            break;
    }
}

