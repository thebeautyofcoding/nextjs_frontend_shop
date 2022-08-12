import gql from "graphql-tag"

export const getAllProducts = gql`
  query GetAllProducts {
    products {
      id
      name
      price
      description
      image
      quantity
      createdAt
      updatedAt
    }
  }
`
