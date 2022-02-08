import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  // mount
  UNSAFE_componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('mounted')
  }

  // update
  shouldComponentUpdate(prevState, prevProps) {
    console.log('should be updated')
    return true
  }

  UNSAFE_componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('updated')
  }

  // unmount
  componentWillUnmount() {
    console.log('will unmount')
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.increment}
      >
        {this.state.count}
      </button>
    );
  }
}
