import { Todo, IDatabase, StepFilter } from './types'

class Db implements IDatabase {
  private _todos: Todo[] = []

  createTodo(todo: Todo) {
    this._todos.push(todo)
  }

  deleteTodo(id: string) {
    this._todos = this._todos.filter(todo => todo.id != id)
  }

  updateTodo(updatedTodo: Todo) {
    this._todos = this._todos.map(todo =>
      updatedTodo.id == todo.id ? updatedTodo : todo
    )
  }

  todo(id: string) {
    const todo = this._todos.find(todo => todo.id == id)
    if (todo == undefined) {
      throw Error('no todo found')
    }
    return todo
  }

  todos(filter: StepFilter) {
    return this._todos.filter(todo => {
      if (filter == StepFilter.COMPLETED) {
        return todo.completed
      } else if (filter == StepFilter.INCOMPLETE) {
        return !todo.completed
      }
      return true
    })
  }
}

export { Db }
