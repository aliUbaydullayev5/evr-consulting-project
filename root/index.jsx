import React from 'react'
import Container from "@/root/style";
import logo from '../assets/png/logo.png'
import Image from "next/image";
import {useRouter} from "next/router";

const Root = ({children}) => {

    const router = useRouter()

    return(
        <Container>
            <Container.LogoSection>
                <Image src={logo} alt={'logo'} className={'logo'} onClick={()=> router.push('/home')} />
            </Container.LogoSection>
            <Container.MainSection>
                {children}

            </Container.MainSection>
        </Container>
    )
}

export default Root