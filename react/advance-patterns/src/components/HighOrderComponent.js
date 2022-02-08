// HOF => High Order Function
// Una función que recibe como argumento otra función, realiza una logica, y returna la función que recibió como
// argumento mejorada.
// HOC => High Order Component
function withRouter(Component) {
  const additionalProps = { history: {}, location: {}, match: {} }

  return function (props) {
    return <Component {...props} {...additionalProps} />
  }
}

function Home(props) {
  console.log(props)
  return <h1>Hola home</h1>
}

export default withRouter(Home);
