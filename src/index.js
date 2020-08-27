import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const quotesData = [{
  quote: "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though",
  author: "J.D. Salinger"
},
{
  quote: 'A writer is someone for whom writing is more difficult than it is for other people.',
  author: "Thomas Mann"
},
{
  quote: 'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author',
  author: "G.K. Chesterton"
},
{
  quote: "I've got the key to my castle in the air, but whether I can unlock the door remains to be seen",
  author: "Louisa May Alcott"
},
{
  quote: 'Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons',
  author: "Robertson Davies"
},
{
  quote: 'Quiet people have the loudest minds.',
  author: "Stephen King"
}
];
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this);

  }
  componentDidMount() {
    let randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    this.setState(state => ({
      quote: randomQuote.quote,
      author: "" + randomQuote.author
    }));
  };

  render() {
    return (<div>
      <div className="bg-image"></div>
      <div id="quote-box">
        <p id="text"><q>{this.state.quote}</q></p>
        <p id="author">- {this.state.author}</p>
        <button id="tweet-button"><a id="tweet-quote" href="twitter.com/intent/tweet">tweet!</a></button>
        <button id="new-quote" onClick={this.componentDidMount}>New Quote!</button>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <MyApp></MyApp>,
  document.getElementById('wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
