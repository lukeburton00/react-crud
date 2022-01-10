import logo from './logo.svg';
import './App.css';
import Table from './Table';
import React from 'react';
import Form from './Form';

class App extends React.Component {
  state = {
      characters: []
    }
  render() {
    const {characters} = this.state

    

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState ({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
}

export default App