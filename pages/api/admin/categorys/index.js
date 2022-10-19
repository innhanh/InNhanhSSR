const { Categorys, Links } = require("../../../../db/models");

//Methode: GET
const GetAllCate = async (req, res) => {
    try {
        const list = await Categorys.findAll();
        return res.status(200).json({ Categorys: list })
    } catch (error) {
        return res.status(500).json(error)
    }
};

const AddCategory = async (req, res) => {

}

export default async function handler(req, res) {
    switch (req.method) {
        case "POST": {
            return res.status(200).json({ Category: "POST" })
        }
        case "PUT": {
            return res.status(200).json({ Category: "PUT" })
        }
        case "DELETE": {
            return res.status(200).json({ Category: "DELETE" })
        }
        default: {
            GetAllCate(req, res);
            break;
        }

    }
}