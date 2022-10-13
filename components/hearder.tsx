import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiClients } from "../ApiClients/apiClients";
import { CategorySuccess } from "../redux/Slice";
import { Selector } from "../redux/selector";

import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap";
import { toast } from "react-toastify";
function Hearder() {
    const dispath = useDispatch();
    const [search, setSearch] = useState("");
    const Categorys = useSelector(Selector.Categorys);

    const handleToast = () => {
        toast.success(search);
        setSearch("");
    }

    useEffect(() => {
        const GetCate = async () => {
            await ApiClients.Categorys.GetAll(dispath, CategorySuccess);
        };
        GetCate();
    }, [])
    return (
        <div id="hearder">
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                Categorys.map((cate, index) => {
                                    return (
                                        cate.pages ?
                                            <NavDropdown key={index} title={cate.name} id={cate.name}>
                                                {
                                                    cate.pages.map((page, i) => {
                                                        return (
                                                            <NavDropdown.Item key={i} href={page.link}>{page.name}</NavDropdown.Item>
                                                        )
                                                    })
                                                }
                                            </NavDropdown>
                                            :
                                            <Nav.Link key={index} href={cate.link}>{cate.name}</Nav.Link>
                                    )
                                })
                            }
                        </Nav>

                        <form className="d-flex">
                            <input onChange={(e) => setSearch(e.target.value)} value={search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={() => handleToast()} className="btn btn-outline-success" type="button">Search</button>
                        </form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
};

export default Hearder;