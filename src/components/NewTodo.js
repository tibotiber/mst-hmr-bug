import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Input } from 'antd'

let id = 1
const randomId = () => ++id

class NewTodo extends Component {
  static propTypes = {
    newTodo: PropTypes.string.isRequired,
    setNewTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  }

  render () {
    const { newTodo, setNewTodo, addTodo } = this.props
    return (
      <Input.Search
        autoFocus
        placeholder='new task'
        value={newTodo}
        enterButton='Add Task'
        onChange={e => setNewTodo(e.target.value)}
        onSearch={value => addTodo(randomId(), value)}
      />
    )
  }
}

export default observer(NewTodo)
