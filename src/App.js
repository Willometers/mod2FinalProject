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
    console.log(input)
  }

  state = {
    allWords: [],
    input: "",
    savedWords: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
    let searchWord = this.state.input
    console.log('SW', searchWord)
    fetch(URL+`${searchWord}`+key)
    .then(res => res.json())
    .then(words => this.setState({allWords: words}))
  }
}

  render() {
    return(
      <div>
        <div>
          <img src="https://dictionaryapi.com/images/MWLogo_120x120_2x.png" alt="mw-logo"></img>
        </div>
        <div>
          < SearchForm handleSubmit={this.handleSubmit}/>
        </div>
          <h3> Search Results: </h3>
        <div>
          < SearchContainer allWords={this.state.allWords}/>
        </div>
          <h3> Favorites: </h3>
        <div>
          < FavoriteContainer savedWords={this.state.savedWords}/> 
        </div>
      </div>
    )
  }


}

export default App;
