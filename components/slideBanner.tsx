import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function SlideBanner({ images }) {
    const [image, setImage] = useState(images[0]);
    return (
        <div id="slideBanner">
            <Row>
                <Col xs={12}>
                    <img src={image.url} alt={image.name} />
                </Col>
            </Row>
            <Row>
                {
                    images?.map((img, index) => {
                        return (
                            <Col key={index} xs={3}>
                                <img onClick={() => setImage(img)} src={img.url} alt={img.name} />
                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    );
}

export default SlideBanner;