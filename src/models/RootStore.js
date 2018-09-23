import { types } from 'mobx-state-tree'
import User from './User'
import Todo from './Todo'

const RootStore = types
  .model({
    users: types.optional(types.map(User), {}),
    todos: types.optional(types.map(Todo), {}),
    newTodo: types.optional(types.string, '')
  })
  .views(self => ({
    get pending () {
      return Array.from(self.todos.values()).filter(todo => !todo.done).length
    },
    get completed () {
      return Array.from(self.todos.values()).filter(todo => todo.done).length
    }
  }))
  .actions(self => ({
    addTodo: (id, name) => {
      self.todos.set(id, Todo.create({ name }))
      self.newTodo = ''
    },
    setNewTodo: value => {
      self.newTodo = value
    }
  }))

export default RootStore
