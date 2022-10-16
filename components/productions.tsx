import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ApiClients } from '../ApiClients/apiClients';
import { Selector } from '../redux/selector';
import { ProductionSuccess } from '../redux/Slice';

function Productions(props) {
    const dispath = useDispatch();
    useEffect(() => {
        const GetAllProductions = async () => {
            await ApiClients.Productions.GetAll(dispath, ProductionSuccess);
        };
        GetAllProductions();
    }, []);

    const Produc = useSelector(Selector.Productions);

    return (
        <div id='productions'>
            <div className='inNhanh_title'>
                <h1><span>Sản Phẩm của</span> INNHANH79</h1>
            </div>
            <div className='production-content'>
                <Row>
                    {
                        Produc?.map((pro, index) => {
                            return (
                                <Col key={index} xs={4}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={pro.url} />
                                        <Card.Body>
                                            <Card.Title>
                                                <img src={pro.icon} alt={`${pro.name}_icon`}/>
                                                {pro.name}
                                            </Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Kích thước: {pro.size}</li>
                                                    <li>Định lượng: {pro.quantitative}</li>
                                                    <li>Loại giấy: {pro.paper}</li>
                                                    <li>{pro.tag}</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
            </div>
        </div>
    );
}

export default Productions;