type Todo = {
    id: string
    title: string | null
    complete: boolean
    createdOn: string
    completedOn?: string | boolean | null
}

type TodoCRUD = (todo: Todo) => void
