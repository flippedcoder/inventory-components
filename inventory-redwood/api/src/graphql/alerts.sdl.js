export const schema = gql`
  type Alert {
    id: Int
    name: String
    date: String
    description: String
  }

  type Query {
    alerts: [Alert]
  }
`