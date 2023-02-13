import React from 'react'
import Container from './style'
import Button from "@/modules/Button";

const ProductModal = ({title, img, price, day, other}) => {

    const styling = {
        backgroundImage: `url(${img.src})`,
    }

    return(
        <Container style={styling}>
            <Container.ContentArea>
                <p className={'titleText'}>{title}</p>
                <hr/>
                <p className="price">NARXI: <span>{price}</span></p>
                <p className="day">KUN: <span>{day}</span></p>
                <div className={'buttonDiv'}>
                    <Button padding={'5px 60px'}>BATAFSIL</Button>
                </div>
            </Container.ContentArea>
        </Container>
    )
}

export default ProductModal