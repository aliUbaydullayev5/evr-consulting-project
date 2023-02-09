import React from 'react'
import Navbar from "@/components/navbar";
import Container from "@/root/style";

const Root = ({children}) => {
    return(
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Root