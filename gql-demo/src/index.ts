import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import { importSchema } from 'graphql-import'
import { Db } from './db'
import { resolvers } from './resolvers'

async function main() {
  try {
    const typeDefs = await importSchema('./src/schema.graphql')
    const executableSchema = gql(typeDefs)
    const server = new ApolloServer({
      typeDefs: executableSchema,
      context: { db: new Db() },
      resolvers
    })
    const app = express()
    server.applyMiddleware({ app })
    app.listen({ port: 4000 }, () =>
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    )
  } catch (error) {
    console.error(`error during sever start: ${error}`)
    process.exit(1)
  }
}

main()
