import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  min-width: 900px;
  margin: 50px auto;
  border-radius: 15px;
  background-color: #E9E9E9;
  padding: 15px;
  display: grid;
  grid-template-rows: 70px 1fr;
  @media only screen and (max-width: 800px) {
    min-width: 97%;
  }
  
`

Container.LogoSection = styled.div`
  padding: 0 30px;
  .logo{
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  
`
Container.MainSection = styled.div`
  
`

export default Container