import React from 'react'
import { Text } from 'react-native'
import { NavBar } from '../../components/NavBar'
import { PageContent } from './styles'

export const Home = () => {
    return (
        <>
            <NavBar />
            <PageContent>
                <Text>olas</Text>
            </PageContent>
        </>
    )
}

