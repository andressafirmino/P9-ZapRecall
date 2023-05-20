import styled from "styled-components"
import play from "../assets/seta_play.png"
import back from "../assets/seta_virar.png"

export default function Question(props) {
    return (
        <Quest>
            <Title>
                <p>Pergunta {props.position}</p>
                <img src={play} />
            </Title>
            <Box_Question>
                <p>{props.quest}</p>
                <img src={back} />
            </Box_Question>
            <Answer>
                <p>{props.answ}</p>
                <div>
                    <Red>
                        <p>Não lembrei</p>
                    </Red>
                    <Orange>
                        <p>Quase não lembrei</p>
                    </Orange>
                    <Green>
                        <p>Zap!</p>
                    </Green>
                </div>
            </Answer>
        </Quest>
    )
}

const Quest = styled.div `
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

const Title = styled.div `
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
    display: none;

    p {
        font-size: 17px;
        font-weight: 700;
        color: #333333;
    }
    img {
        width: 20px;
        height: 23px;
    }
`;

const Box_Question = styled.div `
    width: 300px;
    height: 131px;
    background-color: #FFFFD5;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 15px;
    position: relative;
    display: none;


    p {
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

const Answer = styled.div `
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
            font-size: 12px;
            font-weight: 400;
            color: #FFFFFF;
        }
        }
    }
    
`;

const Red = styled.button `
    background-color: #FF3030;
`;
const Orange = styled.button `
    background-color: #FF922E;
`
const Green = styled.button `
    background-color: #2FBE34;
`;