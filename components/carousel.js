import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { ApiClients } from '../ApiConfig/apiClients';
import { Selector } from '../redux/selector';
import { CarouselSuccess } from '../redux/Slice';

function Carousels() {
  const dispath = useDispatch();
  useEffect(() => {
    const GetAllCarrousel = async () => {
      await ApiClients.Carousels.GetAll(dispath, CarouselSuccess);
    };
    GetAllCarrousel();
  }, []);

  const banner = useSelector(Selector.Carousels);
  console.log(banner)
  return (
    <Carousel>
      {
        banner?.map((image, index) => {
          return (

            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.url}
                alt={image.name}
              />
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default Carousels;