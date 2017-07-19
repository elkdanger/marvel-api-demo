import * as React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'

const mapStateToProps = state => ({
  data: state.searchResults
})

const masonryOptions = {}

const thumbUrl = item => {
  return `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`
}

export class SearchResultsComponent extends React.Component {
  render() {
    return (
      <Masonry className="search-results">
        {this.props.data.map(d => <img src={thumbUrl(d)} />)}
      </Masonry>
    )
  }
}

export default connect(mapStateToProps)(SearchResultsComponent)
