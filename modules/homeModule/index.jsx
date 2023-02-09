import Container, {Block} from './style'
import {data} from "@/modules/homeModule/data"

const HomeModule = () => {
    return(
        <Container>
            {
                data.map(({id, title, link})=> <Block key={id}> {title}</Block>)
            }
        </Container>
    )
}

export default HomeModule