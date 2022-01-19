import create, { GetState, SetState } from 'zustand'
import { persist, StoreApiWithPersist } from 'zustand/middleware'

interface TodoState {
    todos: Todo[]
    addTodo: TodoCRUD
    removeTodo: TodoCRUD
    removeAll(): void
    isCompleted: TodoCRUD
}

export const useTodoStore = create(
    persist<TodoState, SetState<TodoState>, GetState<TodoState>, StoreApiWithPersist<TodoState>>(
        (set) => ({
            todos: [],
            addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
            removeTodo: (todo: Todo) => set((state) => ({ todos: state.todos.filter((it) => it.id !== todo.id) })),
            removeAll: () => set((state) => ({ todos: state.todos.filter((it) => !it.complete) })),
            isCompleted: (todo: Todo) =>
                set((state) => ({
                    todos: state.todos.map((it) => ({
                        ...it,
                        complete: it.id === todo.id ? !todo.complete : it.complete,
                    })),
                })),
        }),
        { name: 'todoStore' },
    ),
)
