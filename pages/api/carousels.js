const { Carousels } = require("../../db/models");

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



export default async function handler(req, res) {
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
        default: {
            try {
                const list = await Carousels.findAll();
                return res.status(200).json({ Carousels: list })
            } catch (error) {
                return res.status(500).json(error)
            }
        }
    }

}
