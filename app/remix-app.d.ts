type Todo = {
    id: string
    title: string | null
    complete: boolean
    createdOn: string
}

type TodoCRUD = (todo: Todo) => void
