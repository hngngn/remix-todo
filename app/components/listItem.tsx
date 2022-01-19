import { HStack, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import { IoBan } from 'react-icons/io5'
import { useTodoStore } from '~/store/useTodoStore'

interface IListItemProps {
    todos: Todo
}

const ListItemComponent = ({ todos }: IListItemProps) => {
    const { removeTodo, isCompleted } = useTodoStore()

    return (
        <HStack w="100%">
            <Stack
                w="100%"
                p={3}
                rounded={10}
                as="button"
                onClick={() => isCompleted(todos)}
                color={todos.complete ? 'gray.400' : 'orange.500'}
                bg={todos.complete ? 'gray.100' : 'orange.50'}
                wordBreak="break-word"
                textAlign="start">
                <Text fontWeight={500} fontFamily="Inter">
                    Created on: {todos.createdOn}
                </Text>
                <Text
                    textDecoration={todos.complete ? 'line-through' : 'none'}
                    fontSize="lg"
                    fontFamily="Inter"
                    fontWeight={600}>
                    {todos.title}
                </Text>
                <Text fontWeight={500} fontFamily="Inter">
                    {todos.complete && `Completed on: ${todos.completedOn}`}
                </Text>
            </Stack>
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
