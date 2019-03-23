import React from 'react';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  // pagination - stretch - previous state 
  prev = e => {
    if (this.state.prev === null) {
      e.preventDefault();
    }

    else {
      this.getCharacters(this.state.prev);
    }
  }

   // pagination - stretch - next state 
  next = e => {
    if (this.state.next === null) {
      e.preventDefault();
    }
    
    else {
      this.getCharacters(this.state.next);
    }
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
          next: data.next, // added pagination - stretch
          prev: data.previous }); // added pagination - stretch
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Container">
          <Pagination next={this.next} prev={this.prev}/>
          <CharacterList starwarsChars={this.state.starwarsChars} />
          <Pagination next={this.next} prev={this.prev}/>
        </div>
      </div>
    );
  };
};

export default App;
