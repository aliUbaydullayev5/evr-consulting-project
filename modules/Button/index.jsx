import React from 'react'
import Container from './style'

const Button = ({
                    children,
                    bc,
                    border,
                    color,
                    padding,
                    fontSize,
                    margin
}) => {
    return(
        <Container
            bc={bc}
            border={border}
            color={color}
            padding={padding}
            fontSize={fontSize}
            margin={margin}
        >
            {children}
        </Container>
    )
}

export default Button