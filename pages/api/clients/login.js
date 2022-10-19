const { Users } = require("../../../db/models")
export default async function handler(req, res) {
    switch (req.method) {
        case "GET": {
            const admin = await Users.findOne({
                where: {
                    userName: "admin"
                }
            });
            if (admin) {
                return res.status(200).json({ admin: admin })
            } else {
                return res.status(404).json({ error: "User not found!" })
            }
        }

        default:
            break;
    }
}