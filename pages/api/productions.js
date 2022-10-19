const Productions = [
{
    name:"IN BAO THƯ",
    icon:"",
    url:"/img/productions/inbaothu.jpg",
    size:"12 x 22, 17 x 23, 25 x 35",
    quantitative:"100 - 120 gsm",
    paper:"Fort",
    tag:"In Nhanh, In Offset"
},
{
    name:"IN NAME CARD",
    icon:"",
    url:"/img/productions/innamecard.jpg",
    size:"5.3 x 8.8, 5.3 x 9, 5.5 x 9.2",
    quantitative:"250gsm - 350 gsm",
    paper:"Fort, Couche, Mỹ Thuật",
    tag:"In Nhanh, In Offset"
},
{
    name:"IN TỜ RƠI",
    icon:"",
    url:"/img/productions/intoroi.jpg",
    size:"A5, A4, A3, SRA3, 13x19",
    quantitative:"120gsm - 350 gsm",
    paper:"Fort, Couche, Mỹ Thuật",
    tag:"In Nhanh, In Offset"
},
{
    name:"IN MENU",
    icon:"",
    url:"/img/productions/inmenu.jpg",
    size:"A5, A4, A3, SRA3, 13x19",
    quantitative:"120gsm - 350 gsm",
    paper:"Couche, Mỹ Thuật, Giấy Nhựa",
    tag:"In Nhanh, In Offset, Bấm Kim, Keo Gáy"
},
{
    name:"IN CATALOGUE",
    icon:"",
    url:"/img/productions/incatologue.jpg",
    size:"A4 Đứng , A4 Nằm Ngang , A5",
    quantitative:"Bìa, Ruột 150 gsm",
    paper:"Couche, Mỹ Thuật, Giấy Nhựa",
    tag:"In Nhanh, In Offset, Bấm Kim, Keo Gáy"
},
{
    name:"IN FOLDER",
    icon:"",
    url:"/img/productions/infolder.jpg",
    size:"22x31x7",
    quantitative:"250 gsm - 300 gsm",
    paper:"Fort, Couche, Mỹ Thuật",
    tag:"Màng Bóng, Màng Mờ"
},
{
    name:"IN HÓA ĐƠN, BIỂU MẪU",
    icon:"",
    url:"/img/productions/inhoadon.jpg",
    size:"14x20, 20x28",
    quantitative:"52 gsm - 55 gsm",
    paper:"Fort, Carbonless",
    tag:"2, 3, 4 liên, bấm kim, keo gáy"
},
{
    name:"IN TEM DECAL, STICKER",
    icon:"",
    url:"/img/productions/inticker.png",
    size:"tùy chọn",
    quantitative:"120 gsm",
    paper:"Decal giấy, Nhựa, Trong , Kraft",
    tag:"Cắt bế hình dạng theo yêu cầu"
}
]

export default function handler(req, res) {
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
            res.status(200).json({ Productions: Productions })
            break;
    }

}