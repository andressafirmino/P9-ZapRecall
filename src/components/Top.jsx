import styled from 'styled-components'
import Logo from '../assets/logo.png'

export default function Top() {
    return (
        <Topo>
            <img src={Logo} />
            <div><p>ZapRecall</p></div>
        </Topo>
    );
}

const Topo = styled.div `
display: flex;
margin: 42px auto;
  img {
    width: 52px;
    height: 60px;
  }  
  div {
    width: 203px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Righteous', cursiva;
        font-size: 36px;
        font-weight: 400;
        color: #FFFFFF;
    }
  }
`;