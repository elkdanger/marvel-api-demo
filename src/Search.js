import * as React from 'react'
import './Search.css'
import api from './api'

export default class SearchComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      isValid: false,
      isDirty: false,
      searchTerm: ''
    }
  }

  onSubmitForm = evt => {
    evt.preventDefault()

    if (this.state.isValid) {
      api.searchCharacters(this.state.searchTerm)
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
