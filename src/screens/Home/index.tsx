import React from 'react'
import { Describe } from '../../components/Describe'
import { NavBar } from '../../components/NavBar'
import { SimpleButton } from '../../components/SimpleButton'
import { TwoButtonContainer } from '../../components/TwoButtonContainer'
import { Container } from './styles'


export const Home = () => {
    return (
        <Container>
            <NavBar />
            <Describe title='Olá Visitante' titleText='Aqui você pode marcar um horario ou pode solicitar um corte de emergencia, voce só precisa de um cadastro.' />
            <TwoButtonContainer>
                <SimpleButton buttonText='Login' />
                <SimpleButton buttonText='Cadastrar' />
            </TwoButtonContainer>
        </Container>
    )
}

