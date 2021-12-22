export function Comments({ comments }) {
  const styles = {
    title: {
      color: comments.length > 10 ? 'blue' : 'black',
      backgroundColor: 'lightblue',
    },
    list: {
      width: comments.length < 10 ? 500 : 1000,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      margin: '0 auto',
    },
    listItem: {
      width: 200,
      listStyle: 'none',
    }
  }

  const { title, list, listItem } = styles
  return (
    <div>
      <h2 style={title}>Comments</h2>
      <ul style={list}>
        {comments.map(({ id, name, body }) => (
          <li key={id} style={listItem}>
            <h3>{name}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
