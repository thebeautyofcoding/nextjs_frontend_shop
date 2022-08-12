import React from "react"
import {
  GetAllProductsQuery,
  GetProductByIdQuery,
  GetProductByIdQueryVariables,
  Product,
} from "../../graphql/types"
import { client } from "./../_app"
import { getProductById } from "./../../graphql/getProductById.query"
import { getAllProducts } from "./../../graphql/getProducts.query"
import { useAppDispatch, useAppSelector } from "./../../hooks/hooks"
import { Button, Card, Stack } from "react-bootstrap"
import { addItemToCart, deleteItemFromCart } from "../../redux/cartSlice"

export default function ProductDetails({ product }: { product: Product }) {
  const dispatch = useAppDispatch()

  const productsInCart = useAppSelector((state) =>
    state.cart.productsInCart.filter((prod) => prod.id === product.id)
  )

  return (
    <Card>
      <Card.Header>
        <h3>{product.name}</h3>
      </Card.Header>
      <Card.Body>
        <p>{product.description}</p>
        <p>{product.price}</p>
        {productsInCart.length === 0 ? (
          <Button onClick={() => dispatch(addItemToCart(product))}>
            Add to Cart
          </Button>
        ) : (
          <Stack direction="horizontal" gap={2}>
            <Button onClick={() => dispatch(addItemToCart(product))}>
              <i className="fas fa-plus"></i>
            </Button>
            <div>{productsInCart[0]?.quantity}</div>
            <Button
              onClick={() => dispatch(deleteItemFromCart(product))}
              variant="danger">
              <i className="fas fa-minus"></i>
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  )
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { data } = await client.query<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >({
    query: getProductById,
    variables: { id: Number(params.id) },
  })
  return {
    props: {
      product: data.product,
    },
  }
}

export async function getStaticPaths() {
  const { data } = await client.query<GetAllProductsQuery>({
    query: getAllProducts,
  })

  const paths = data.products.map((product) => ({
    params: { id: product.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}
