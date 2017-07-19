import * as React from 'react'
import logo from './img/marvel.png'
import { connect } from 'react-redux'
import './App.css'
import Search from './Search'
import SearchResuls from './SearchResults'
import Spinner from 'react-spinkit'

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row header">
          <div className="col-sm-7">
            <img src={logo} alt="Marvel" />
            <h1>
              <span className="visually-hidden">Marvel</span> character browser
              {this.props.isLoading &&
                <Spinner name="cube-grid" color="white" fadeIn="none" />}
            </h1>
          </div>
          <div className="col-sm-5">
            <Search />
          </div>
        </div>
        <div className="row">
          <SearchResuls />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
