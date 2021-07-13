import React from 'react'
import WordCard from './WordCard'


const SearchContainer = (props) => {

    return(
      <div id="word-collection">
        {props.allWords.map(word => {
         return < WordCard key={word.meta.uuid} word={word}/>
        })} 
      </div>
    );

  }

export default SearchContainer;
