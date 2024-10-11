
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super(); // JS function: it allows to access the properties and methods of the parent class within the child class
    
    // Setthng Initial state (like and dislike)
    /*Evet-handler function definition (handleLike and handleDislike)
    The update of the states is fined by setState() with a JS '=> ({})' function, having '{}' for dynamic updates and using key:pairs objects
    The setState() introduces a local var called prevState (i.e. setState(prevState)) used for the logic operations in the '=> ({})' function */

    this.state = {likes: 0, 
                  dislikes: 0,
                  totaRatings: 0,

                  handleLike : () => {
                    this.setState((prevState) => ({
                      likes : prevState.likes + 1
                    }));
                  },

                  handleDislike : () => {
                    this.setState((prevState) => ({
                      dislikes : prevState.dislikes + 1
                    }));

                  },

                  handleTotalRating : () => {
                    this.setState(() => ({
                      totaRatings : likes + dislikes
                    }));

                  }
    };  
  }

  // Render: Text and Event handler by buttons!!
  render() {
    return (
     <>
      <h1>Text Content Rating (Alejo tested)</h1>
      <h2>This page only uses JS code, no react hooks!!!</h2>
      <div classNamme = 'content-rating'>
        <p> //Add text here!!! </p>
        <div className = 'rating-buttons'>
          <button className = 'like-button' onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>

          <button className = 'dislike-button' onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>  

          <button className = 'total-ratings-button'>
            Total Rating ({this.state.totaRatings} onClick={this.state.handleTotalRating})
          </button>

        </div> 
      </div>
      
     </>
    );
  }
}

export default ContentRating;
