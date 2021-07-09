import React, { Component } from 'react'
import FavoritesContainer from './components/FavoritesContainer';

const URL='https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class App extends Component {

    state = {
      allWords: []
    }

    componentDidMount() {
      fetch(URL)
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
