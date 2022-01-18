import { VStack } from '@chakra-ui/react'
import { useTodoStore } from '~/store/useTodoStore'
import ListItemComponent from './listItem'

const ListComponent = () => {
    const { todos } = useTodoStore()
    return (
        <VStack w="100%" spacing={5}>
            {todos.map((list) => (
                <ListItemComponent todos={list} key={list.id} />
            ))}
        </VStack>
    )
}

export default ListComponent
