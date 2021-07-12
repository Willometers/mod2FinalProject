import React, { Component } from 'react'

class WordCard extends Component {

    handleCLick = (e) => {
        e.preventDefault()
        console.log("word added")
    }

    render() {
        return (
        <form>
            
          <div className="card">
            <h3>{this.props.word.meta.id}</h3>
                <ul>
                    <li>{this.props.word.shortdef}</li>
                    <li>{this.props.word.date}</li>
                    <li>{this.props.word.hwi.hw}</li>
                </ul>
            <button type='submit' name='submit' value='Add' className='submit'
                onClick={this.handleCLick}>Add Word</button>
          </div>
          </form>
        );
      }
    
    }

export default WordCard