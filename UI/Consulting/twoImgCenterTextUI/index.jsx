import Container from './style'
import Image from "next/image";
import img1 from '../../../assets/png/img8.png'
import img2 from '../../../assets/png/img9.png'
import Button from "@/modules/Button";
import React from "react";
const TwoImgCenterTextUI = () => {
    return(
        <>
            <Container>
                <div data-aos="fade-right">
                    <Image src={img1} alt={'img'} className={'img'} />
                </div>
                <div>
                    <p className="title">
                        Artworks Courses Gift Card Homewear Tableware
                    </p>
                </div>
                <div data-aos="fade-left">
                    <Image src={img2} alt={'img'} className={'img'} />
                </div>
            </Container>
            <Container.SubArea>
                <div data-aos="fade-right">
                    <Button margin={'40px 0 0 0'}>Registratsiya</Button>
                </div>
            </Container.SubArea>
        </>
    )
}

export default TwoImgCenterTextUI