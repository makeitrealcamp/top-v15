// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../store';

export function Button() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: INCREMENT })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: DECREMENT })}
      >
        Decrement
      </button>
    </div>
  )
}

// function mapStateToProps(state) {
//   return {
//     count: state.count,
//   }
  // <Button count={state.count} />
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch({ type: INCREMENT }),
//   }
  // <Button increment={() => dispatch({ type: INCREMENT })} />
// }

// function connect(mapStateToProps, mapDispatchToProps) {
//   const reduxProps = {
//     ...mapStateToProps(store.getState()),
//     ...mapDispatchToProps(store.dispatch),
//   };

//   return function (Component) {
//     return function (props) {
//       return <Component {...props} {...reduxProps} />
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Button);
