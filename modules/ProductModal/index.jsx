import React from 'react'
import Container from './style'
import img1 from "@/assets/png/img3.png";

const ProductModal = ({title, img, price, day, other}) => {
    const styling = {
        backgroundImage: `url(${img.src})`,
    }
    return(
        <Container style={styling}>
            <Container.ContentArea>
                {title}
            </Container.ContentArea>
        </Container>
    )
}

export default ProductModal