import Container, {Main, MobileVersion, MenuSection} from './style'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Logo from '../../assets/icon/logo.svg'
import Menu from '../../assets/icon/menu.svg'
import Close from '../../assets/icon/close.svg'

const Navbar = () => {
    const router = useRouter()
    const activeStyle = {
        color: 'rgb(158, 114, 44)',
        borderBottom: '2px solid rgb(158, 114, 44)',
        fontWeight: '600',
        fontSize: '17px'
    }

    const activeStyleMobile = {
        fontSize: '24px',
        fontWeight: '700',
        border: '2px solid #fff',
        padding: '4px 10px'
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuHidden, setMenuHidden] = useState(false)

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
        <Main>
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
            <MobileVersion scrollPosition={scrollPosition > 400 ? true : false}>
                <Logo className={'logoImage'} />
                <Menu className={'menuImage'} onClick={()=> setMenuHidden(true) } />
                {
                    menuHidden &&
                    <MenuSection className={'nocopy'}>
                        <Close className={'closeButton'} onClick={()=> setMenuHidden(false) } />
                        <div
                            className='title nocopy'
                            onClick={()=> router.push('/consulting')}
                            style={router.pathname.split('/').slice(1, 2).join('') === 'consulting' ? activeStyleMobile : {color: '#fff'}}
                        >
                            Consulting
                        </div>

                        <div
                            className='title nocopy'
                            onClick={()=> router.push('/umrah-haji')}
                            style={router.pathname.split('/').slice(1, 2).join('') === 'umrah-haji' ? activeStyleMobile : {color: '#fff'}}
                        >
                            Umra haji
                        </div>

                        <div
                            className='title nocopy'
                            onClick={()=> router.push('/travel-agent')}
                            style={router.pathname.split('/').slice(1, 2).join('') === 'travel-agent' ? activeStyleMobile : {color: '#fff'}}
                        >
                            Travel agent
                        </div>

                        <div
                            className='title nocopy'
                            onClick={()=> router.push('/it-academy')}
                            style={router.pathname.split('/').slice(1, 2).join('') === 'it-academy' ? activeStyleMobile : {color: '#fff'}}
                        >
                            It academy
                        </div>
                    </MenuSection>
                }
            </MobileVersion>
        </Main>

    )
}

export default Navbar