import Container from './style'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Navbar = () => {
    const router = useRouter()
    const activeStyle = {
        color: '#5c5d50',
        borderBottom: '2px solid #5c5d50',
        fontWeight: '600',
        fontSize: '17px'
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <Container scrollPosition={scrollPosition > 400 ? true : false} >
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