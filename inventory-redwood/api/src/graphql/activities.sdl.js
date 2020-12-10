export const schema = gql`
  type Activity {
    id: Int
    name: String
    date: String
    description: String
  }

  type Query {
    activities: [Activity]
  }
`