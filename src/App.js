import React, { Component } from 'react'
import FavoritesContainer from './components/FavoritesContainer';

const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'
let keyWord = "container"

class App extends Component {

    state = {
      allWords: []
    }

    componentDidMount() {
      fetch(URL+`${keyWord}`+key)
      .then(res => res.json())
      .then(words => this.setState({allWords: words}))
    }

    render() {
      return(
        <div>
          < FavoritesContainer allWords={this.state.allWords}/>
        </div>
      )
    }
}

export default App;
