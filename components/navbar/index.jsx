import Container from './style'
import {useRouter} from "next/router";

const Navbar = () => {

    const router = useRouter()

    console.log(router.pathname.split('/').slice(1, 2).join(''))


    const activeStyle = {
        color: '#5c5d50',
        borderBottom: '2px solid #5c5d50',
        fontWeight: '600',
        fontSize: '17px'
    }

    return(
        <Container>
            <div
                className='title nocopy'
                onClick={()=> router.push('/consulting')}
                style={router.pathname.split('/').slice(1, 2).join('') === 'consulting' ? activeStyle : {color: '#000', borderBottom: '2px solid rgba(0, 0, 0, 0)'}}
            >
                Consulting
            </div>

            <div
                className='title nocopy'
                onClick={()=> router.push('/umrah-haji')}
                style={router.pathname.split('/').slice(1, 2).join('') === 'umrah-haji' ? activeStyle : {color: '#000', borderBottom: '2px solid rgba(0, 0, 0, 0)'}}
            >
                Umra haji
            </div>

            <div
                className='title nocopy'
                onClick={()=> router.push('/travel-agent')}
                style={router.pathname.split('/').slice(1, 2).join('') === 'travel-agent' ? activeStyle : {color: '#000', borderBottom: '2px solid rgba(0, 0, 0, 0)'}}
            >
                travel agent
            </div>

            <div
                className='title nocopy'
                onClick={()=> router.push('/it-academy')}
                style={router.pathname.split('/').slice(1, 2).join('') === 'it-academy' ? activeStyle : {color: '#000', borderBottom: '2px solid rgba(0, 0, 0, 0)'}}
            >
                it academy
            </div>
        </Container>
    )
}

export default Navbar