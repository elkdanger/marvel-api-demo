import * as React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'
import './SearchResults.css'

const mapStateToProps = state => ({
  data: state.searchResults
})

const thumbUrl = item => {
  return `${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`
}

export class SearchResultsComponent extends React.Component {
  render() {
    const items = this.props.data.map(d =>
      <div className="character-container">
        <img src={thumbUrl(d)} alt={'Image for ' + d.name} />
        <div className="character-info">
          {d.name}
        </div>
      </div>
    )
    return (
      <Masonry className="search-results">
        {items}
      </Masonry>
    )
  }
}

export default connect(mapStateToProps)(SearchResultsComponent)
