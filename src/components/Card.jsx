import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }





  componentDidUpdate(){
    document.body.style.backgroundColor = "#39A8A6"
  }


  render() { 
    return (
      <div className="card">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nemo, repellat atque quae veniam dolorum.</p>
        <h3>-Ipsum Text</h3>
      </div>
    );
  }
}
 
export default Card;



const colors = [
"#39A8A6",
"#637575",
"#61DB93",
"#E09AAD",
"#A8398E"
]

const quotes = [
  {
    name: "Love all, trust a few, do wrong to none.",
    quote: "William Shakespeare"
  },
  {
    name: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    quote: "Nelson Mandela"
  },
  {
    name: "The way to get started is to quit talking and begin doing.",
    quote: "Walt Disney"
  },
  {
    name: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    quote: "Steve Jobs"
  },
  {
    name: "If life were predictable it would cease to be life, and be without flavor.",
    quote: "Eleanor Roosevelt"
  }
]

