import gql from "graphql-tag"

export const createCheckoutSession = gql`
  mutation CreateCheckoutSession($items: [CreateSessionInput!]!) {
    createCheckoutSession(items: $items) {
      url
    }
  }
`
