import { Container } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const GlobalLayout = ({ children }: PropsWithChildren<{}>) => {
    return <Container maxW="container.xl">{children}</Container>
}

export default GlobalLayout
