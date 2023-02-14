import React from 'react'
import Navbar from "@/components/Navbar";
import Container from "@/root/style";

const Root = ({children}) => {
    return(
        <>
            <Navbar />
            <Container>
                {children}
            </Container>
            <br/><br/><br/><br/>
        </>
    )
}

export default Root