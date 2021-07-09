import React, { Component } from 'react'
import WordCard from './WordCard'

const FavoritesContainer = (props) => {
    return(
      <div id="word-collection">
        {props.allWords.map(word => {
         return < WordCard key={word.meta.uuid} word={word}/>
        })} 
        
      </div>
    );
  }

export default FavoritesContainer;