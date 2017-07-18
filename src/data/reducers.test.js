import { searchResultsReducer } from './reducers'
import { Constants } from './actions'

it('returns the default state when invoked', () => {
  expect(searchResultsReducer()).toEqual([])
})

it('returns the data array from the api results', () => {
  const resultData = [{ id: 1, name: 'Hero 1' }, { id: 2, name: 'Hero 2' }]
  const state = searchResultsReducer([], {
    type: Constants.RESULTS_LOADED,
    data: {
      offset: 0,
      limit: 20,
      total: 2,
      count: 2,
      results: resultData
    }
  })

  expect(state).toEqual(resultData)
})
