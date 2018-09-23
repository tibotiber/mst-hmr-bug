import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

class Counter extends Component {
  static propTypes = {
    pending: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired
  }
  render () {
    const { pending, completed } = this.props
    return (
      <span>
        {pending} completed - {completed} completed
      </span>
    )
  }
}

export default observer(Counter)
