import React from "react";
import { Container, Title, TitleText } from "./styles";

export const Describe = ({title, titleText}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <TitleText>{titleText}</TitleText>
        </Container>
    )
}