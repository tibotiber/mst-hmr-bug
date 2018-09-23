import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { onSnapshot, getSnapshot } from 'mobx-state-tree'
import { onError } from 'mobx-react'

import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import RootStore from './models/RootStore'

const DEBUG = false

// global error handler for mobx
onError(console.error)

let store = RootStore.create()
if (DEBUG) {
  onSnapshot(store, console.log)
}

function render () {
  ReactDOM.render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

registerServiceWorker()

render()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render()
  })

  module.hot.accept('./models/RootStore', () => {
    const snapshot = getSnapshot(store)
    store = RootStore.create(snapshot)
    render()
  })
}
