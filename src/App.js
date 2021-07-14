import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import SearchForm from './components/SearchForm';
import FavoriteContainer from './components/FavoriteCard';


const URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/'
const key = '?key=99b4ce5d-7ca7-4258-90a4-39b4171e5d4a'

class App extends Component {

  handleSubmit = (input) => {
    this.setState(input)
  }

    state = {
      allWords: [],
      input: "",
    }

    componentDidUpdate() {
      let searchWord = this.state.input
      fetch(URL+`${searchWord}`+key)
      .then(res => res.json())
      .then(words => this.setState({allWords: words}))
    }

    render() {
      return(
        <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <img src="https://dictionaryapi.com/images/MWLogo_120x120_2x.png" alt="mw-logo" ></img>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            < SearchForm handleSubmit={this.handleSubmit}/>
          </div>
          <h3 style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}> Search Results: </h3>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            < SearchContainer allWords={this.state.allWords}/>
          </div>
          <h3 style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}> Favorites: </h3>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            < FavoriteContainer saveWord={this.saveWord}/> 
          </div>
        </div>
      )
    }
}

export default App;
