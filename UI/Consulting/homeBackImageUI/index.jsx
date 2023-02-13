import React from 'react'
import Container from "./style";
import img1 from '../../../assets/png/img3.png'

const HomeBackImageUI = () => {

    const styling = {
        backgroundImage: `url(${img1.src})`,
    }
    
    return(
        <Container style={styling}>
            <div className="title nocopy">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, praesentium.
            </div>
        </Container>
    )
}

export default HomeBackImageUI