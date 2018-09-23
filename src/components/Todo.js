import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { List } from 'antd'
import styled from 'styled-components'

const Striked = styled.span`
  text-decoration: ${props => (props.striked ? 'line-through' : 'none')};
  color: ${props => (props.striked ? 'grey' : 'black')};
`

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      name: PropTypes.string,
      done: PropTypes.bool
    })
  }
  render () {
    const { todo } = this.props
    return (
      <List.Item onClick={() => todo.toggle()}>
        <Striked striked={todo.done}>{todo.name}</Striked>
      </List.Item>
    )
  }
}

export default observer(Todo)
