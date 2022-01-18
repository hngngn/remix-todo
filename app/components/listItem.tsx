import { Button, HStack, Icon, IconButton, Text } from '@chakra-ui/react'
import { IoBan } from 'react-icons/io5'
import { useTodoStore } from '~/store/useTodoStore'

interface IListItemProps {
    todos: Todo
}

const ListItemComponent = ({ todos }: IListItemProps) => {
    const { removeTodo, isCompleted } = useTodoStore()

    return (
        <HStack w="100%">
            <Button
                textDecoration={todos.complete ? 'line-through' : 'none'}
                onClick={() => isCompleted(todos)}
                justifyContent="flex-start"
                w="100%"
                size="lg"
                variant="ghost"
                _focus={{}}
                colorScheme={todos.complete ? 'gray' : 'orange'}
                color={todos.complete ? 'gray.400' : 'orange.500'}
                bg={todos.complete ? 'gray.100' : 'orange.50'}>
                <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                    {todos.title}
                </Text>
            </Button>
            <IconButton
                onClick={() => removeTodo(todos)}
                _focus={{}}
                bg="red.50"
                icon={<Icon as={IoBan} />}
                colorScheme="red"
                variant="ghost"
                aria-label="Delete todo"
                size="lg"
            />
        </HStack>
    )
}

export default ListItemComponent
