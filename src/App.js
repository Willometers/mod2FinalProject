import React, { Component } from 'react'
import SearchContainer from './components/SearchContainer';
import SearchForm from './components/SearchForm';

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
          < SearchForm />
          < SearchContainer allWords={this.state.allWords}/>
        </div>
      )
    }
}

export default App;
