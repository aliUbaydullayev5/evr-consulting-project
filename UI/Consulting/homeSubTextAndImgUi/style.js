import styled from 'styled-components'

const Container = styled.div`
  margin: 60px 0 0 0;
  padding: 0 var(--mainPadding);
  .title{
    font-weight: 400;
    font-size: 72px;
    line-height: 80px;
    color: #000000;
    text-align: left;
    max-width: 60%;
  }
  .centerText{
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    color: #000000;
    text-align: center;
    max-width: 300px;
    margin: 50px auto;
  }
  @media only screen and (max-width: 800px) {
    margin: 60px 0 0 0;
    padding: 0 var(--mainPadding);
    .title{
      font-weight: 400;
      font-size: 36px;
      line-height: 50px;
      color: #000000;
      text-align: left;
      max-width: 90%;
    }
    .centerText{
      font-weight: 400;
      font-size: 17px;
      line-height: 25px;
      color: #000000;
      text-align: center;
      max-width: 300px;
      margin: 50px auto;
    }
  }
`

Container.ImgSection = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 0 200px 0;
  .img1{
    position: absolute;
    right: 160px;
    border-radius: 5px;
  }
  .img2{
    border-radius: 5px;
  }
  .img3{
    position: absolute;
    left: 100px;
    top: 300px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 600px;
    position: relative;
    padding: 30px 0 200px 0;
    .img1{
      position: absolute;
      left: 0;
      border-radius: 5px;
      width: 70%;
      height: auto;
      z-index: -1;
      max-width: 370px;
    }
    .img2{
      position: absolute;
      border-radius: 5px;
      max-width: 400px;
      right: 0;
      top: 30px;
      width: 75%;
      z-index: -1;
      height: auto;
      
    }
    .img3{
      width: 90%;
      max-width: 450px;
      height: auto;
      position: absolute;
      left: 0;
      top: 300px;
      z-index: -1;
      border-radius: 5px;
    }
  }
`

Container.SubTitleSection = styled.div`
  margin: 120px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  >p{
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    color: #000000;
    max-width: 70%;
  }
`


export default Container