import styled from 'styled-components'

const Container = styled.div`
  margin: 60px 0;
  padding: 0 var(--mainPadding);
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    font-weight: 400;
    font-size: 51px;
    line-height: 80px;
    text-align: center;
    color: #000000;
    max-width: 400px;
    margin: 30px 0;
  }
  .desc{
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    max-width: 850px;
    margin: 20px 0;
  }
`
Container.MenuSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  >div{
    display: flex;
    justify-content: center;
  }
  
`

export default Container