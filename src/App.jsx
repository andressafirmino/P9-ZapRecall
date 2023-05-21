import { useState } from 'react'
import styled from 'styled-components'
import Top from './components/Top';
import Questions from './components/Questions';
import Bottom from './components/Bottom';
export default function App() {

  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <Body>
      <Top />
      <Questions counter={counter} setCounter={setCounter}/>
      <Bottom counter={counter} setCounter={setCounter}/>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
`;

