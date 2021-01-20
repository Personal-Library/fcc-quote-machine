import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
    this.randomColor = this.randomColor.bind(this)
    this.randomQuote = this.randomQuote.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.nextQuote = this.nextQuote.bind(this)
  }

  randomColor = () => {
    let index = Math.floor(Math.random()*colors.length)
    return colors[index]
  }

  randomQuote = () => {
    let index = Math.floor(Math.random()*quotes.length)
    let quote = quotes[index].text
    let author = quotes[index].name
    this.setState({
      quote: quote,
      author: author
    })
  }

  nextQuote = () => {
    document.body.style.backgroundColor = this.randomColor();
    this.randomQuote();
  }

  handleClick = () => {
    document.body.style.backgroundColor = this.randomColor();
    this.randomQuote();
    clearInterval(this.timerID);
    this.timerID = setInterval(this.nextQuote, 4000)
  }

  componentDidMount() {
    document.body.style.backgroundColor = this.randomColor()
    this.randomQuote()
    this.timerID = setInterval(this.nextQuote, 4000)
  }


  render() { 
    return (
      <div className="card" id="quote-box">
        <p id="text">{this.state.quote}</p>
        <h3 id="author">-{this.state.author}</h3>
        <button onClick={this.handleClick} id="new-quote"></button>
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
"#A8398E",
"#F0EA78",
"#84D0F0",
"#F0D06D",
"#8C54F0",
"#845ec2",
"#d65db1",
"#ff6f91",
"#ff9671",
"#ffc75f",
"#f9f871",
"#def4fe",
"#318eab",
"#fefedf",
"#9b89b3",
"#ff8066"
]

const quotes = [
  {
    text: "Love all, trust a few, do wrong to none.",
    name: "William Shakespeare"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    name: "Walt Disney"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    name: "Steve Jobs"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    name: "Eleanor Roosevelt"
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    name: "Ralph Waldo Emerson"
  },
  {
    text: "Whoever is happy will make others happy too.",
    name: "Anne Frank"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    name: "Aristotle"
  },
  {
    text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    name: "Helen Keller"
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    name: "Benjamin Franklin"
  },
  {
    text: "We all make choices in life, but in the end our choices make us.",
    name: "Andrew Ryan"
  },
  {
    text: "Get over here!",
    name: "Scorpion"
  },
  {
    text: "What is better? To be born good or to overcome your evil nature through great effort?",
    name: "Paarthurnax"
  },
  {
    text: "The right man in the wrong place can make all the difference in the world.",
    name: "G-Man"
  },
  {
    text: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
    name: "Javik"
  },
  {
    text: "Bring me a bucket, and I'll show you a bucket!",
    name: "Psycho"
  }
]

