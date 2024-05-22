import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    font-size: 18px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

    const Botao = ({onClick, children}) => {
        return <BotaoEstilizado onClick={onClick}>{children}</BotaoEstilizado>
    };

export default Botao;