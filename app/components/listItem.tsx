import { HStack, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import moment from 'moment'
import { IoBan } from 'react-icons/io5'
import { useTodoStore } from '~/store/useTodoStore'

interface IListItemProps {
    todos: Todo
}

const ListItemComponent = ({ todos }: IListItemProps) => {
    const { removeTodo, isCompleted } = useTodoStore()
    const date = moment().format('MMM Do YY, h:mm:ss a')

    return (
        <Stack w="100%">
            <HStack w="100%">
                <Stack
                    p={3}
                    rounded={10}
                    as="button"
                    onClick={() => isCompleted(todos)}
                    w="100%"
                    color={todos.complete ? 'gray.400' : 'orange.500'}
                    bg={todos.complete ? 'gray.100' : 'orange.50'}>
                    <Text fontWeight={500} fontFamily="Inter">
                        Created on: {todos.createdOn}
                    </Text>
                    <Text
                        textDecoration={todos.complete ? 'line-through' : 'none'}
                        fontSize="lg"
                        fontFamily="Inter"
                        fontWeight={600}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap">
                        {todos.title}
                    </Text>
                    {todos.complete && (
                        <Text fontWeight={500} fontFamily="Inter">
                            Completed on: {date}
                        </Text>
                    )}
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
        </Stack>
    )
}

export default ListItemComponent
