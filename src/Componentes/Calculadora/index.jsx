import { useState } from "react";
import styled from "styled-components"
import Botao from "../BotaoEstilizado";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Display = styled.div`
    width: 260px;
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2em;
    padding: 0 20px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const BotaoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

const Calculadora = () => {
    const [input, setInput] = useState('')
    const [resultado, setResultado] = useState(null)

    const handleBotaoClick = (valor) => {
        if (valor === 'C') {
            setInput('');
            setResultado(null)
        } else if (valor === '=') {
            try {
                setResultado(eval(input))
            } catch (error) {
                setResultado(`Erro`)
            }
        } else {
            setInput(input + valor);
        }
    };

    return (
        <Container>
            <Display>{resultado !== null ? resultado : input || '0'}</Display>
            <BotaoContainer>
                {['7', '8', '9', '/'].map((val) => (
                <Botao key={val} onClick={() => handleBotaoClick(val)}>{val}</Botao>
            ))}
                {['4', '5', '6', '*'].map((val) => (
                <Botao key={val} onClick={() => handleBotaoClick(val)}>{val}</Botao>
            ))}
                {['1', '2', '3', '-'].map((val) => (
                <Botao key={val} onClick={() => handleBotaoClick(val)}>{val}</Botao>
            ))}
                {['0', '.', '=', '+'].map((val) => (
                <Botao key={val} onClick={() => handleBotaoClick(val)}>{val}</Botao>
            ))}
                <Botao onClick={() => handleBotaoClick('C')}>C</Botao>
            </BotaoContainer>
        </Container>
    );
}

export default Calculadora;