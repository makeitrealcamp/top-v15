import React from 'react';
// Render props
// Component que no retorna un jsx sino que retorna la ejecución de una función que se recibió por props

export class InputChange extends React.Component {
  state = {
    text: '',
  };

  change = (e) => {
    console.log('changing input', this.props.name)
    this.setState({ text: e.target.value });
  };

  render() {
    return this.props.children(this.state.text, this.change);
  }
}
