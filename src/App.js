import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import SearchForm from './components/SearchForm';
import FavoriteContainer from './components/FavoriteContainer';


const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class App extends Component {

  handleSubmit = (input) => {
    this.setState(input)
    this.componentDidMount()
  }
    state = {
      allWords: [],
      input: ""
    }

    componentDidMount() {
      let searchWord = this.state.input
      fetch(URL+`${searchWord}`+key)
      .then(res => res.json())
      .then(words => this.setState({allWords: words}))
    }

    render() {
      return(
        <div>
          <h1> Dictionary </h1>
          < SearchForm handleSubmit={this.handleSubmit}/>
          <h2> Results: </h2>
          < SearchContainer allWords={this.state.allWords}/>
          <h2> Favorites: </h2>
          < FavoriteContainer /> 
        </div>
      )
    }
}

export default App;
