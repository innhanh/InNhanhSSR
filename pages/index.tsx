import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';
import Carousels from '../components/carousel'
import Productions from '../components/productions';
import SlideBanner from '../components/slideBanner';
const images = [
  {
    name: "intro1",
    url: "/img/menuPrint1.png"
  },
  {
    name: "intro2",
    url: "/img/menuPrint2.jpg"
  },
  {
    name: "intro3",
    url: "/img/menuPrint3.jpg"
  },
  {
    name: "intro4",
    url: "/img/menuPrint4.jpg"
  },
]

export default function Home() {
  return (
    <div id='homePage'>
      <Container>
        <Carousels />
        <div id='innhanh_intro' className='d-flex'>
          <div className='intro'>
            <div className='inNhanh_title'>
              <h1>TRUNG TÂM <span>INNHANH79</span></h1>
            </div>
            <Row>
              <Col xs={7}>
                <p>In nhanh là một lĩnh vực đang rất phát triển tại Việt Nam, đặt biệt là các thành phố lớn, thành phố di lịch,
                  khi sự hội nhập đòi hỏi sự chuyên nghiệp và nhanh chóng chính xác cao cùng với đời sống kinh tế ngày càng
                  đi lên thì quan điểm về quảng cáo, khuyến mãi cũng không ngừng thay đổi. Trong đó, xu hướng chung là
                  mọi Khách Hàng ngày càng khắt khe hơn với những ấn phẩm quảng cáo, những thông điệp mà bất cứ
                  Doanh Nghiệp nào cũng cần phải có, để tiếp cận thị trường, tiếp cận Khách Hàng tiềm năng của mình.
                  Là một Doanh Nghiệp chuyên ngành in ấn giấy, chúng tôi mong muốn được góp một phần công sức của
                  mình vào sự thành công và phát triển của quý vị.</p>
              </Col>
              <Col xs={5}>
                <SlideBanner
                  images={images}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div id='innhanh_productions'>
          <Productions />
        </div>
      </Container>

    </div>

  )
}
