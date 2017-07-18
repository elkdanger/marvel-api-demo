import * as React from 'react'
import logo from './img/marvel.png'
import './App.css'
import Search from './Search'

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row header">
          <div className="col-sm-7">
            <img src={logo} alt="Marvel" />
            <h1>
              <span className="visually-hidden">Marvel</span> character browser
            </h1>
          </div>
          <div className="col-sm-5">
            <Search />
          </div>
        </div>
      </div>
    )
  }
}
