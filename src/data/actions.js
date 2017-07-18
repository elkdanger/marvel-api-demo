import api from '../api'

export const Constants = {
  RESULTS_LOADED: 'RESULTS_LOADED'
}

export const Actions = {
  doSearch(name) {
    return async dispatch => {
      const results = await api.searchCharacters(name)

      if (results.code === 200) {
        dispatch({
          type: Constants.RESULTS_LOADED,
          data: results.data
        })
      }
    }
  }
}
