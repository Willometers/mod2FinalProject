import React, { Component } from 'react'

class WordCard extends Component {

    render() {
        return (
          <div className="card">
            <h2>{this.props.word.shortdef}</h2>
          </div>
        );
      }
    
    }

export default WordCard