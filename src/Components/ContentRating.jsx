
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super(); // JS function: it allows to access the properties and methods of the parent class within the child class
    this.state = {likes: 0, dislikes: 0}; // Setthng Initial state
  }
  render() {
    return (
     <>
      <h1>Text Content Rating (Alejo tested)</h1>
      <div classNamme = 'content-rating'/>
        <p> //Add text here</p>
      </div>
     </>
    );
  }
}

export default ContentRating;
