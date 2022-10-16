// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

const carousels = [
    {
        name: "banner1",
        link: "/in-nhanh",
        url: "/img/carousels/Banner1.jpg"
    },
    {
        name: "banner2",
        link: "/in-quang-cao",
        url: "/img/carousels/Banner2.jpg"
    },
    {
        name: "banner3",
        link: "/in-ban-ve",
        url: "/img/carousels/Banner5.jpg"
    },
    {
        name: "banner4",
        link: "/thiet-ke-bndth",
        url: "/img/carousels/Banner3.jpg"
    },
    {
        name: "banner5",
        link: "/thiet-ke",
        url: "/img/carousels/Banner4.jpg"
    },
    {
        name: "banner6",
        link: "/setup-events",
        url: "/img/carousels/Banner6.jpg"
    },

];



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST": {
            break;
        }
        case "PUT": {
            break;
        }
        case "DELETE": {
            break;
        }
        default:
            res.status(200).json({ Carousels: carousels })
            break;
    }

}
