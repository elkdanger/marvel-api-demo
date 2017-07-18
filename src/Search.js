import * as React from 'react'
import './Search.css'

export default class SearchComponent extends React.Component {
  onSubmitForm = evt => {
    evt.preventDefault()
    console.log('Searching characters..')
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
