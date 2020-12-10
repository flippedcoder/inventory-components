export const schema = gql`
  type Item {
    id: Int
    name: String
    date: String
    amount: Int
    location: String
  }

  type Query {
    items: [Item]
  }
`