function Book({ title, description, votes }) {
  return (
    <article className="book" data-testid="book">
      <h2 className="book-title" data-testid="title">{title}</h2>
      <span data-testid="votes">votes: {votes}</span>
      <p data-testid="description">{description}</p>
    </article>
  )
}

export default Book
