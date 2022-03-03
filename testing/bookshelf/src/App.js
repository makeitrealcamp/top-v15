import React from 'react';
import uuid from 'uuid-random'
import Books from './components/Books'
import Form from './components/Form'
import './App.css';

class App extends React.Component {
  state = {
    books: []
  }

  createBook = (title, description) => {
    const book = {
      id: uuid(),
      title,
      description,
      votes: 0,
    }

    this.setState(prevState => ({
      books: [ ...prevState.books, book ]
    }))
  }

  render() {
    const { books } = this.state

    return (
      <div className="App">
        <Form createBook={this.createBook} />
        <Books books={books} />
      </div>
    );
  }
}

export default App;
