import api from '../api'

export const Constants = {
  RESULTS_LOADED: 'RESULTS_LOADED',
  LOADING_INDICATOR: 'LOADING_INDICATOR'
}

export const Actions = {
  doSearch(name) {
    return async dispatch => {
      dispatch({
        type: Constants.LOADING_INDICATOR,
        isLoading: true
      })

      try {
        const results = await api.searchCharacters(name)

        if (results.code === 200) {
          dispatch({
            type: Constants.RESULTS_LOADED,
            data: results.data
          })
        }
      } finally {
        dispatch({
          type: Constants.LOADING_INDICATOR,
          isLoading: false
        })
      }
    }
  }
}
