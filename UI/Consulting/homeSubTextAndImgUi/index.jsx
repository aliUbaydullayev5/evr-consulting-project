import React from 'react'
import Container from "./style";
import Button from "@/modules/Button";
import img5 from '../../../assets/png/img5.png'
import img6 from '../../../assets/png/img6.png'
import img7 from '../../../assets/png/img7.png'
import Image from "next/image";
const HomeSubTextAndImgUi = () => {

    return(
        <Container>
            <div data-aos="fade-right">
                <div className="title">Contemporary craft and interiors with a mediterranean soul</div>
            </div>
            <div data-aos="fade-right">
                <Button margin={'40px 0 0 0'}>Registratsiya</Button>
            </div>
            <Container.ImgSection>
                <Image src={img5} alt={'img do not important'} className={'img1'} data-aos="fade-left" />
                <Image src={img6} alt={'img do not important'} className={'img2'} data-aos="fade-left" />
                <Image src={img7} alt={'img do not important'} className={'img3'} data-aos="fade-right" />
            </Container.ImgSection>
            <Container.SubTitleSection>
                <div data-aos="fade-right">
                    <p>I’m a Spanish artisan, designer and architect based in Italy. My work is based on the application of craftsmanship in objects and spaces design with a contemporary approach.</p>
                    <p>Influenced by the Mediterranean traditions and culture of my hometown – Valencia – my work develops around ceramics and textiles. Each creation is the result of the union between design and craftsmanship and emphasizes the beauty of handmade things and their imperfections.</p>
                </div>
            </Container.SubTitleSection>
            <div data-aos="fade-right">
                <Button margin={'40px 0 0 0'}>Registratsiya</Button>
            </div>
            <p className="centerText">Here you can find the line of essential ceramics, all customizable products and a curated selection of unique pieces</p>
        </Container>
    )
}

export default HomeSubTextAndImgUi