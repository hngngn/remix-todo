import { Box, Container } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const GlobalLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Box bg="gray.100">
            <Container maxW="container.xl">{children}</Container>
        </Box>
    )
}

export default GlobalLayout
