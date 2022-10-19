const { Categorys } = require("../../db/models")
const categorys = [
  {
    name: "In Nhanh",
    link: "/in-nhanh",
    pages: [
      {
        name: "In Túi Giấy",
        link: "/in-tui-giay"
      },
      {
        name: "In Name Card",
        link: "/in-name-card"
      },
    ]
  },
  {
    name: "In Quảng Cáo",
    link: "/in-quang-cao",
    pages: [
      {
        name: "In PP",
        link: "/in-pp"
      },
      {
        name: "In Decal",
        link: "/in-decal"
      }
    ]
  },
  {
    name: "In Bản Vẽ",
    link: "/in-ban-ve"
  },
  {
    name: "Thiết Kế Sáng Tạo",
    link: "/thiet-ke"
  },
  {
    name: "Setup Events",
    link: "/setup-envents"
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
        const list = await Categorys.findAll();
        return res.status(200).json({ Categorys: list })
      } catch (error) {
        return res.status(500).json(error)
      }
    }


  }

}
