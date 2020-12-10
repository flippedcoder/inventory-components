export const schema = gql`
  type Store {
    id: Int!
    name: String!
  }

  type Query {
    stores: [Store!]!
    store(id: Int!): Store
  }

  input CreateStoreInput {
    name: String!
  }

  input UpdateStoreInput {
    name: String
  }

  type Mutation {
    createStore(input: CreateStoreInput!): Store!
    updateStore(id: Int!, input: UpdateStoreInput!): Store!
    deleteStore(id: Int!): Store!
  }
`
