import { ChakraProvider } from '@chakra-ui/react'
import type { MetaFunction } from 'remix'
import { Outlet } from 'remix'
import Document from './components/document'

export const meta: MetaFunction = () => {
    return { title: 'Todo | Remix', description: 'TodoApp built with Remix' }
}

export default function App() {
    return (
        <Document>
            <ChakraProvider>
                <Outlet />
            </ChakraProvider>
        </Document>
    )
}
