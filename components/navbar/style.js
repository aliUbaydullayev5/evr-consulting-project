import styled from 'styled-components'

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
`

export default Container