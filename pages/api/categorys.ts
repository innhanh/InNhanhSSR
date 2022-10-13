// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

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
    link: "/in-bane-ve"
  }
]

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
      res.status(200).json({ Categorys: categorys })
      break;
  }

}
