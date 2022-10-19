import { Container, Row, Col, Nav, Form } from "react-bootstrap";
function Footer() {
    return (
        <div id="footer">
            <Container>
                <Row>
                    <Col className="footer_innhanh" xs={3}>
                        <div className="footer_logo">
                            <img src="/img/logo.png" />
                            <p>www.innhanh79.vn</p>
                        </div>
                        <div className="time_worlk">
                            <i className="fa fa-clock"></i>
                            <div className="time">
                                <p>Thứ 2 - Thứ 7</p>
                                <p>8h00 - 12h00</p>
                                <p>13h30 - 18h30</p>
                            </div>
                        </div>
                    </Col>

                    <Col className="footer_branchs" xs={3}>
                        <h1>CN1</h1>
                        <div className="branch_infor">
                            <i className="fa fa-map-marker-alt"></i>
                            <p>43D/10 Hồ Văn Huê - P.9 -
                                Q.Phú Nhuận - TP.HCM.</p>
                        </div>
                        <div className="branch_infor">
                            <i className="fa fa-phone"></i>
                            <p><Nav.Link href="tel:0888229079">0888.229.079</Nav.Link>-<Nav.Link href="tel:0918196699">0918.196.699</Nav.Link></p>
                        </div>
                        <div className="branch_infor">
                            <i className="fa fa-envelope"></i>
                            <p>innhanh79@gmail.com</p>
                        </div>
                    </Col>

                    <Col className="footer_branchs" xs={3}>
                        <h1>CN1</h1>
                        <div className="branch_infor">
                            <i className="fa fa-map-marker-alt"></i>
                            <p>43D/10 Hồ Văn Huê - P.9 -
                                Q.Phú Nhuận - TP.HCM.</p>
                        </div>
                        <div className="branch_infor">
                            <i className="fa fa-phone"></i>
                            <p><Nav.Link href="tel:0888229079">0888.229.079</Nav.Link>-<Nav.Link href="tel:0918196699">0918.196.699</Nav.Link></p>
                        </div>
                        <div className="branch_infor">
                            <i className="fa fa-envelope"></i>
                            <p>innhanh79@gmail.com</p>
                        </div>
                    </Col>

                    <Col className="footer_feedback" xs={3}>
                        <h1>Feedback</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer;