import styled from "styled-components";
export default function Bottom(props) {
  const {counter} = props;
    return (
        <Embaixo>
            <p data-test="footer"> {counter}/8 CONCLUÍDOS</p>
        </Embaixo>
    );
}

const Embaixo = styled.div `
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
  }
`;