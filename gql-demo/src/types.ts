type Todo = {
  id: string
  title: string
  completed: boolean
}

interface IDatabase {
  createTodo(todo: Todo): void
  deleteTodo(id: string): void
  todos(filter: StepFilter): Todo[]
  todo(id: string): Todo
  updateTodo(updatedTodo: Todo): void
}

enum StepFilter {
  COMPLETED = 'COMPLETED',
  INCOMPLETE = 'INCOMPLETE'
}

export { Todo, IDatabase, StepFilter }
