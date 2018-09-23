import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import { observer } from 'mobx-react'
import { values } from 'mobx'
import { Flex, Box } from 'grid-styled'
import Todo from './Todo'
import NewTodo from './NewTodo'
import Counter from './Counter'

class App extends Component {
  static propTypes = {
    store: PropTypes.any
  }

  render () {
    const { store } = this.props
    return (
      <Flex flexDirection='column' p={4}>
        <NewTodo
          newTodo={store.newTodo}
          addTodo={store.addTodo}
          setNewTodo={store.setNewTodo}
        />
        <Box mt={1} mb={2}>
          <Counter pending={store.pending} completed={store.completed} />
        </Box>
        <List
          dataSource={values(store.todos)}
          renderItem={todo => <Todo todo={todo} />}
        />
      </Flex>
    )
  }
}

export default observer(App)
