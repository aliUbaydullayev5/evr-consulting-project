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