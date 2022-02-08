import React from 'react';
import { CounterContext } from '../context/counter'

// export function Counter() {
//   return (
//     <CounterContext.Consumer>
//       {({ count }) => <p>{count}</p>}
//     </CounterContext.Consumer>
//   )
// }

export class Counter extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <p>{this.context.count}</p>
    )
  }
}
