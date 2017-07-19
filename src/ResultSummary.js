import * as React from 'react'
import { connect } from 'react-redux'
import './ResultSummary.css'

const mapStateToProps = state => ({
  resultInfo: state.resultInfo
})

const characterWord = count => (count == 1 ? 'character' : 'characters')

const ResultSummary = props => {
  if (props.resultInfo.total !== undefined) {
    let summary = ''
    if (props.resultInfo.total > props.resultInfo.count) {
      summary = `Found ${props.resultInfo.total} matching ${characterWord(
        props.resultInfo.count
      )}, showing the first ${props.resultInfo.count}`
    } else if (props.resultInfo.total === 0) {
      summary = `No characters were found`
    } else {
      summary = `Found ${props.resultInfo.count} matching ${characterWord(
        props.resultInfo.count
      )}`
    }

    return (
      <div id="result-summary">
        {summary}
      </div>
    )
  } else {
    return null
  }
}

export default connect(mapStateToProps)(ResultSummary)
