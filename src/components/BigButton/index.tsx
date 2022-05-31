import React from "react";
import { Button, ButtonText, Container } from "./styles";

export const BigButton = ({buttonText}) => {
    return (
        <Container>
            <Button>
                <ButtonText>{buttonText}</ButtonText>
            </Button>
        </Container>
    )
}