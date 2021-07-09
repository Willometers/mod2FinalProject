import React, { Component } from 'react'
import FavoritesContainer from './components/SearchContainer';

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'
let searchWord = "container"

class App extends Component {

    state = {
      allWords: []
    }

    componentDidMount() {
      fetch(URL+`${searchWord}`+key)
      .then(res => res.json())
      .then(words => this.setState({allWords: words}))
    }

    render() {
      return(
        <div>
          < SearchContainer allWords={this.state.allWords}/>
        </div>
      )
    }
}

export default App;
