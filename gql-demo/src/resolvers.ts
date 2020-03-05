import { v4 } from 'uuid'
import { Todo, IDatabase, StepFilter } from './types'

function createTodo(root: any, args: { input: Todo }, ctx: { db: IDatabase }) {
  const newTodo = { ...args.input, id: v4() }
  ctx.db.createTodo(newTodo)
  return newTodo
}

function deleteTodo(root: any, args: { id: string }, ctx: { db: IDatabase }) {
  ctx.db.deleteTodo(args.id)
  return args.id
}

function todo(root: any, args: { id: string }, ctx: { db: IDatabase }) {
  return ctx.db.todo(args.id)
}

function updateTodo(
  root: any,
  args: { updatedTodo: Todo },
  ctx: { db: IDatabase }
) {
  ctx.db.updateTodo(args.updatedTodo)
  return args.updatedTodo
}

function todos(root: any, args: { filter: StepFilter }, context: any) {
  return context.db.todos(args.filter)
}

const resolvers = {
  Query: {
    todos,
    todo
  },
  Mutation: {
    updateTodo,
    createTodo,
    deleteTodo
  }
}

export { resolvers }
