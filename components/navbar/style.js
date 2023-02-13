import styled from 'styled-components'

const Main = styled.div`
  
`

const Container = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  transition: 1s;
  background: ${({scrollPosition})=> scrollPosition ? 'rgba(164, 164, 164, 0.94)' : 'rgba(255, 255, 255, 0.53)'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 999999999999999;
  .title {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #000000;
    cursor: pointer;
    transition: .2s;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const MobileVersion = styled.div`
  background: ${({scrollPosition})=> scrollPosition ? 'rgba(164, 164, 164, 0.94)' : 'rgba(255, 255, 255, 0.53)'};
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 999999999999999;
  .logoImage{
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  .menuImage{
    cursor: pointer;
    transition: .2s; 
    :active{
      transform: scale(1.1);
    }
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`

const MenuSection = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(5px);
  box-shadow: 0 1px 15px 1px black;
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  .title{
    font-size: 24px;
    color: #fff;
    font-weight: 500;
  }
  
  .closeButton{
    position: absolute;
    top: 20px;
    right: 20px;
    transition: .2s;
    :active{
      transform: scale(1.1);
    }
  }
`


export {Main, MobileVersion, MenuSection}
export default Container