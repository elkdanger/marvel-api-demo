import * as React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  data: state.searchResults
})

export class SearchResultsComponent extends React.Component {
  render() {
    const thumbUrl = item =>
      `${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`

    return (
      <div className="grid">
        {this.props.data.map(d => <img src={thumbUrl(d)} />)}
      </div>
    )
  }
}

export default connect(mapStateToProps)(SearchResultsComponent)
