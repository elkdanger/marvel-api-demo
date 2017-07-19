import { combineReducers } from 'redux'
import { Constants } from './actions'

export const searchResultsReducer = (state = [], action) => {
  if (action && action.type === Constants.RESULTS_LOADED) {
    return action.data.results
  }
  return state
}

const isLoadingReducer = (state = false, action) => {
  if (action && action.type == Constants.LOADING_INDICATOR) {
    return action.isLoading
  }

  return state
}

export default combineReducers({
  searchResults: searchResultsReducer,
  isLoading: isLoadingReducer
})
