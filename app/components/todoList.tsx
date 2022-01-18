import { HStack, Icon, IconButton, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { IoAddCircle, IoTrashBin } from 'react-icons/io5'
import { v4 as uuidv4 } from 'uuid'
import { useTodoStore } from '~/store/useTodoStore'
import ListComponent from './list'

const TodoList = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, removeAll, todos } = useTodoStore()
    const inputRef = useRef<HTMLInputElement>(null)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter')
            return addTodo({ id: uuidv4(), title: newTodoValue, complete: false }), setNewTodoValue('')
    }

    const addNewTodo = () => {
        return addTodo({ id: uuidv4(), title: newTodoValue, complete: false }), setNewTodoValue('')
    }

    return (
        <Stack alignItems="center" justifyContent="center" minH="100vh" overflow="hidden">
            <VStack w="40em" minH="35em" bg="white" rounded={10} boxShadow="xl" p={5} my={10} maxW="calc(100vw - 30px)">
                <Text fontFamily="Inter" fontWeight={700} fontSize="2xl" my={2}>
                    What's the plan for today?
                </Text>
                <HStack w="100%" pb={5}>
                    <Input
                        onKeyDown={keyDownHandler}
                        autoFocus
                        focusBorderColor="none"
                        size="lg"
                        placeholder="Add a todo"
                        value={newTodoValue}
                        onInput={(e) => setNewTodoValue(e.currentTarget.value)}
                        ref={inputRef}
                    />
                    <IconButton
                        onClick={addNewTodo}
                        disabled={!newTodoValue.trim()}
                        _focus={{}}
                        bg="purple.50"
                        icon={<Icon as={IoAddCircle} />}
                        colorScheme="purple"
                        variant="ghost"
                        aria-label="Add todo"
                        size="lg"
                    />
                    <IconButton
                        onClick={removeAll}
                        disabled={!todos.some((it) => it.complete)}
                        _focus={{}}
                        bg="red.50"
                        icon={<Icon as={IoTrashBin} />}
                        colorScheme="red"
                        variant="ghost"
                        aria-label="Delete all"
                        size="lg"
                    />
                </HStack>
                <ListComponent />
            </VStack>
        </Stack>
    )
}

export default TodoList
