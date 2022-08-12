import gql from "graphql-tag"

export const getProductById = gql`
  query GetProductById($id: Int!) {
    product(id: $id) {
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
