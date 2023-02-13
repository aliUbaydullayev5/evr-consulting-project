import React from 'react'
import Container from './style'
import img1 from '../../assets/png/img10.png'
import img2 from '../../assets/png/img11.png'
import img3 from '../../assets/png/img12.png'
import ProductModal from "@/modules/ProductModal";

const LatestProjectsComponent = () => {

    const mockData = [
        {
            id: 1,
            title: 'RAMAZAN 2023-YIL - 1',
            img: img1,
            price: '2200$',
            day: 5,
            other: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestias?'
        },
        {
            id: 2,
            title: 'RAMAZAN 2023-YIL - 2',
            img: img2,
            price: '2200$',
            day: 5,
            other: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestias?'
        },
        {
            id: 3,
            title: 'RAMAZAN 2023-YIL - 3',
            img: img3,
            price: '2200$',
            day: 5,
            other: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, molestias?'
        },
    ]

    return(
        <Container>
            <p className="title" data-aos="fade-right">Latest Projects</p>
            <p className="desc" data-aos="fade-right">A selection of projects that are the result of experimentation with natural materials, attention to detail and craftsmanship techniques. Artwork, ceramics and clothing on commission, interior designs and custom furniture.</p>
            <Container.MenuSection>
                {
                    mockData.map(({id, title, img, price, day, other})=> (
                            <div key={id} data-aos="fade-right">
                                <ProductModal title={title} img={img} price={price} day={day} other={other} />
                            </div>
                        )
                    )
                }
            </Container.MenuSection>
        </Container>
    )
}
// data-aos="fade-right"
export default LatestProjectsComponent