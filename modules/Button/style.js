import styled from 'styled-components'

const Container = styled.button`
  font-weight: 400;
  line-height: 25px;
  text-transform: lowercase;
  border-radius: 250px;
  cursor: pointer;
  transition: .2s;
  background-color: ${({bc})=> bc ? bc : 'rgba(255, 255, 255, 0)'};
  border: ${({border}) => border ? border : '2px solid #000'};
  color: ${({color}) => color ? color : '#000000'};
  padding: ${({padding})=> padding ? padding : '5px 10px'};
  font-size: ${({fontSize})=> fontSize ? fontSize : '20px'};
  margin: ${({margin})=> margin ? margin : '0'};
  :active{
    transform: scale(1.1);
  }
`

export default Container