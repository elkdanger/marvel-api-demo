// @flow
import * as React from 'react'
import './Search.css'

export default class SearchComponent extends React.Component {
  onSubmitForm = evt => {
    evt.preventDefault()
    console.log('Searching characters..')
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for characters"
        />
      </form>
    )
  }
}
