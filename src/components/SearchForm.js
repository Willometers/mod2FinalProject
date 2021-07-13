import React, { Component } from 'react'

class SearchForm extends Component {

    state = {
        input: ""
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state.input)
        this.props.handleSubmit(this.state)
    }

    stateChange(newValue){
        this.setState({
          input: newValue
        })
      }

    render() {
        return(
            <div className="search-bar">

                <form 
                className="search-form"
                onSubmit={this.handleClick}
                >
                    <input type='text' 
                    name='word' 
                    placeholder='enter word here' 
                    className='input-text'
                    onChange={(e) => this.stateChange(e.target.value)}
                    ></input>

                    <input 
                    type='submit' 
                    name='submit' 
                    value='Search' 
                    className='submit'
                    
                    ></input>

                </form>

            </div>
        )
    }

}

export default SearchForm