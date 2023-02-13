import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 770px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 0 0 0;
  .title{
    font-weight: 400;
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 1px 1px 10px #000;
    text-align: center;
    max-width: 70%;
    margin: 0 60px;
  }
  @media only screen and (max-width: 800px) {
    .title{
      font-weight: 400;
      font-size: 28px;
      line-height: 30px;
      text-transform: uppercase;
      color: #FFFFFF;
      text-shadow: 1px 1px 10px #000;
      text-align: center;
      max-width: 70%;
      margin: 0 60px;
    }
  }
`

export default Container