import * as React from 'react'
import logo from './marvel.png'
import './App.css'

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row header">
          <div className="col-sm-8">
            <img src={logo} alt="Marvel" />
            <h1>
              <span className="visually-hidden">Marvel</span> character browser
            </h1>
          </div>
          <div className="col-sm-4" />
        </div>
      </div>
    )
  }
}
