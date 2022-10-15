import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiClients } from "../ApiClients/apiClients";
import { CategorySuccess } from "../redux/Slice";
import { Selector } from "../redux/selector";

import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap";

function Hearder() {
    const dispath = useDispatch();
    const Categorys = useSelector(Selector.Categorys);

    useEffect(() => {
        const GetCate = async () => {
            await ApiClients.Categorys.GetAll(dispath, CategorySuccess);
        };
        GetCate();
    }, [])
    return (
        <div id="hearder">
            <Navbar className="nav-top">
                <Container>
                    <Nav className=" me-auto">
                        <Nav.Link href="/gioithieu">
                            <i className="fa fa-angle-double-right"></i>
                            <span>
                                Giới Thiệu
                            </span>
                        </Nav.Link>

                        <Nav.Link href="/thanhtoan">
                            <i className="fa fa-angle-double-right"></i>
                            <span>
                                Thanh Toán
                            </span>
                        </Nav.Link>

                        <Nav.Link href="/chinhsach">
                            <i className="fa fa-angle-double-right"></i>
                            <span>
                                Thỏa Thuận & Chính Sách
                            </span>
                        </Nav.Link>

                        <Nav.Link href="/lienhe">
                            <i className="fa fa-angle-double-right"></i>
                            <span>
                                Liên Hệ
                            </span>

                        </Nav.Link>
                    </Nav>

                    <Nav >
                        <Nav.Link href="/08888">
                            <i className="fa fa-phone-volume"></i>
                            <span>0888.029.079</span>
                        </Nav.Link>

                        <Nav.Link href="/login">
                            <button className="btn">Login</button>
                        </Nav.Link>

                        <Nav.Link href="/register">
                            <button className="btn">Register</button>
                        </Nav.Link>

                    </Nav>
                </Container>

            </Navbar>



            <Navbar className="nav-main" bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img src="/img/logo.png" alt="logo" className="logo" />
                </Navbar.Brand>
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
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
};

export default Hearder;