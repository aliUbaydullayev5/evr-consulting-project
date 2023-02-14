import Container, {Main} from './style'
import Image from "next/image";
import img1 from '../../../assets/png/img8.png'
import img2 from '../../../assets/png/img9.png'
import Button from "@/modules/Button";
import React, {useEffect, useState} from "react";

const TwoImgCenterTextUI = () => {

    const [widthWindow, setWidthWindow] = useState(0)

    useEffect(()=> setWidthWindow(window.innerWidth), [])
    // {widthWindow > 800 ? 'fade-right' : 'none'}
    return(
        <Main>
            <Container>
                <div data-aos={widthWindow > 800 ? 'fade-right' : 'none'}>
                    <Image src={img1} alt={'img'} className={'img'} />
                </div>
                <div data-aos={widthWindow > 800 ? 'fade-left' : 'none'}>
                    <p className="title">
                        Artworks Courses Gift Card Homewear Tableware
                    </p>
                </div>
                <div data-aos={widthWindow > 800 ? 'fade-left' : 'none'}>
                    <Image src={img2} alt={'img'} className={'img'} />
                </div>
            </Container>
            <Container.SubArea>
                <div data-aos={widthWindow > 800 ? 'fade-right' : 'none'}>
                    <Button margin={'40px 0 0 0'}>Registratsiya</Button>
                </div>
            </Container.SubArea>
        </Main>
    )
}

export default TwoImgCenterTextUI