import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST": {
            const { userName, pass, key } = req.body;
            try {
                if (userName === "admin") {
                    if (key === "innhanh") {
                        return res.redirect("/admin/dashboard")
                    } else {
                        return res.status(400).json({ errror: "Key admin wrong!" })
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