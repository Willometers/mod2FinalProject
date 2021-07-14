import React from 'react'
import WordCard from './WordCard'

const FavoriteContainer = (props) => {

    return(
      <div className="word-collection">

        {props.savedWords.map(word => {
         return (
        < WordCard key={word.meta.sort} word={word}/>
        )})} 

      </div>
    );

  }

export default FavoriteContainer;