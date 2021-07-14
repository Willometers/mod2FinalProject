import React from 'react'
import WordCard from './WordCard'

const SearchContainer = (props) => {

    return(
      <div className="word-collection">
        {props.allWords.map(word => {
         return (

        < WordCard key={word.meta.sort} word={word}/>

        )})} 
      </div>
    );

  }

export default SearchContainer;
