const { createServer } = require('@graphql-yoga/node');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const port = process.env.PORT || 8000;

const resolvers = {
  Query,
  Mutation,
};

const server = createServer({
  schema: {
    // typeDefs: './src/schema.graphql',
    typeDefs: `
      type Query {
        getUsers: [User!]!
        getUser(id: ID!): User!
      }
      type Mutation {
        createUser(name: String!, age: Int!): User!
      }
      type User {
        id: ID!
        name: String!
        age: Int!
      }
    `,
    resolvers,
  },
  port
})

server.start((deeds) => {
  console.log(`App running at http://localhost:${deeds.port}`)
});
