import { createStore } from 'redux'
import reducers from './reducers'

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
