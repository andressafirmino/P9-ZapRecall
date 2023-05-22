import styled from "styled-components"
import play from "../assets/seta_play.png"
import back from "../assets/seta_virar.png"
import wrong from "../assets/icone_erro.png"
import almost from "../assets/icone_quase.png"
import right from "../assets/icone_certo.png"
import { useCallback, useState } from "react";

export default function Question(props) {
    const {position, answer, question } = props;
    const {counter, setCounter} = props;
    const [print, setPrint] = useState(
        <Title>
            <Paragraph data-test="flashcard">Pergunta {position}</Paragraph>
            <img src={play} onClick={start} />
        </Title>
    );

    function not() {
        setPrint(
            <Title>
                <Not data-test="flashcard-text">Pergunta {position}</Not>
                <img src={wrong} data-test="no-icon" />
            </Title>
        )
        setCounter(counter => counter + 1)
    }

    function doubt() {
        setPrint(
            <Title>
                <Doubt data-test="flashcard-text">Pergunta {position}</Doubt>
                <img src={almost} data-test="partial-icon" />
            </Title>
        )
        setCounter(counter => counter + 1)
    }

    function zap() {
        setPrint(
            <Title>
                <Zap data-test="flashcard-text">Pergunta {position}</Zap>
                <img src={right} data-test="zap-icon" />
            </Title>
        )
        setCounter(counter => counter + 1)
    }

    function check(isClick) {


        if (isClick) {
            setPrint(
                <Answer>
                    <p data-test="flashcard-text">{answer}</p>
                    <div>
                        <Red data-test="no-btn">
                            <p onClick={not}>Não lembrei</p>
                        </Red>
                        <Orange data-test="partial-btn">
                            <p onClick={doubt}>Quase não lembrei</p>
                        </Orange>
                        <Green data-test="zap-btn">
                            <p onClick={zap}>Zap!</p>
                        </Green>
                    </div>
                </Answer>
            );
        } else {
            setPrint(
                <Box_Question>
                    <p data-test="flashcard-text">{question}</p>
                    <img src={back} onClick={check} data-test="turn-btn"/>
                </Box_Question>
            );
        }
    }
    function start(click) {
        if (click) {
            setPrint(
                <Box_Question>
                    <p data-test="flashcard-text">{question}</p>
                    <img src={back} onClick={check} data-test="turn-btn" />
                </Box_Question>
            );
        } else {
            setPrint(
                <Title>
                    <Paragraph data-test="flashcard-text">Pergunta {position}</Paragraph>
                    <img src={play} onClick={start} data-test="play-btn" />
                </Title>
            );
        }
    }




    return (
        <Quest>
            {print}
        </Quest>
    )
}

const Quest = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

const Title = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;   
    box-sizing: border-box; 
    padding: 15px;

    img {
        width: 20px;
        height: 23px;
    }
`;

const Paragraph = styled.p`
    font-family: 'Recursive', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #333333;
`;

const Box_Question = styled.div`
    width: 300px;
    height: 131px;
    background-color: #FFFFD5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 15px;
    position: relative;

    p {
        font-family: 'Recursive';
        font-size: 18px;
        font-weight: 400;
        color: #333333;
    }
    img {
        width: 30px;
        height: 20px;
        position: absolute;
        right: 15px;
        bottom: 15px;
    }
`;

const Answer = styled.div`
    width: 300px;
    height: 131px;
    background-color: #FFFFD5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  

    p {
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #333333;
        margin-left: 15px;
    }

    div {
        display: flex;
        justify-content: space-around;

        button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        p {
            font-family: 'Recursive', sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: #FFFFFF;
        }
        }
    }
    
`;


const Red = styled.button`
    background-color: #FF3030;
`;
const Orange = styled.button`
    background-color: #FF922E;
`
const Green = styled.button`
    background-color: #2FBE34;
`;

const Not = styled.p`
    font-family: 'Recursive', sans-serif;
    font-size: 17px;
    font-weight: 700;
    text-decoration: line-through;
    color: #FF3030
`;

const Doubt = styled.p`
    font-family: 'Recursive', sans-serif;
    font-size: 17px;
    font-weight: 700;
    text-decoration: line-through;
    color: #FF922E;
`;

const Zap = styled.p`
    font-family: 'Recursive', sans-serif;
    font-size: 17px;
    font-weight: 700;
    text-decoration: line-through;
    color: #2FBE34;
`;