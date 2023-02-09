import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

const Block = styled.div`
  width: 100%;
  min-width: 130px;
  max-width: 300px;
  height: 300px;
  border-radius: 20px;
  background: #FFB901;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  :hover{
    transform: scale(1.03);
  }
`


export {Block}
export default Container