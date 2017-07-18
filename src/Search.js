import * as React from 'react'
import { connect } from 'react-redux'
import './Search.css'
import { Actions } from './data/actions'

const mapDispatchToProps = dispatch => {
  return {
    doSearch: name => Actions.doSearch(name)(dispatch)
  }
}

export class SearchComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: false,
      isDirty: false,
      searchTerm: ''
    }
  }

  onSubmitForm = evt => {
    evt.preventDefault()

    if (this.state.isValid) {
      this.props.doSearch(this.state.searchTerm)
    }
  }

  onInputChanged = evt => {
    this.setState({
      searchTerm: evt.currentTarget.value,
      isDirty: true,
      isValid: evt.currentTarget.value !== ''
    })
  }

  render() {
    return (
      <div id="search">
        <form onSubmit={this.onSubmitForm}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for characters"
              onChange={this.onInputChanged}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">
                <span className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(undefined, mapDispatchToProps)(SearchComponent)
