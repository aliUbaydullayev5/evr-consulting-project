import styled from 'styled-components'

const Main = styled.div`
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 0 var(--mainPadding);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .title{
    font-weight: 400;
    font-size: 55px;
    line-height: 80px;
    text-align: center;
    color: #000000;
    max-width: 400px;
  }
  >div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img{
    border-radius: 5px;
  }
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 0;
    .title{
      font-weight: 400;
      font-size: 55px;
      line-height: 80px;
      text-align: center;
      color: #000000;
      max-width: 400px;
    }
    >div{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .img{
      border-radius: 5px;
      max-width: 350px;
    }
  }
`
Container.SubArea = styled.div`
  padding: 0 var(--mainPadding);
  display: flex;
  justify-content: center;
  >div{
    display: inline-block;
  }
`

export  {Main}
export default Container