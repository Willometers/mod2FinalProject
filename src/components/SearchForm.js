import React, { Component } from 'react'

class SearchForm extends Component {

    handleClick = (e) => {
        e.preventDefault()
        console.log('Search')
    
    }

    render() {
        return(
            <div className="search-bar">
                <form className="search-form"
                    onSubmit={this.handleClick}>

                    <input type='text' name='word' placeholder='enter word here' className='input-text'
                        onChange> 

                    </input>

                    <input type='submit' name='submit' value='Search' className='submit'>
                    
                    </input>

                </form>
            </div>
        )
    }

}

export default SearchForm