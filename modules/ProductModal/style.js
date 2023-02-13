import styled from 'styled-components'

const Container = styled.div`
  border-radius: 5px;
  width: 341px;
  padding: 251px 0 0 0;
  
`

Container.ContentArea = styled.div`
  height: 265px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(5px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  z-index: 1;
  
  .titleText{
    font-weight: 400;
    font-size: 20px;
    color: #002D24;
  }
  .price{
    
  }
  .day{
    
  }
  .buttonDiv{
    position: absolute;
    left: 0;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
`


export default Container