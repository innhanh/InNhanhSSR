import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiClients } from "../ApiClients/apiClients";
import { CategorySuccess } from "../redux/Slice";
import { Selector } from "../redux/selector";
import Link from "next/link";
function Hearder() {
    const dispath = useDispatch();
    const Categorys = useSelector(Selector.Categorys);
    console.log(Categorys)

    useEffect(() => {
        const GetCate = async () => {
            await ApiClients.Categorys.GetAll(dispath, CategorySuccess);
        };
        GetCate();
    }, [])
    return (
        <div id="hearder">
            {
                Categorys.map((cate, index) => {
                    return (
                        <div key={index} className="container">

                            <Link href={cate.link}>
                                <a>{cate.name}</a>
                            </Link>
                            <div >
                                {
                                    cate.pages?.map((page, i) => {
                                        return (
                                            <li key={i}>{page.name}</li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Hearder;