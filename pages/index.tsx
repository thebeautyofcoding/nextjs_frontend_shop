import { useQuery } from "@apollo/client"
import type { NextPage } from "next"
import Product from "../components/Product"
import { getAllProducts } from "../graphql/getProducts.query"
import { GetAllProductsQuery } from "../graphql/types"
import { Button, Col, Row } from "react-bootstrap"
const Home: NextPage = () => {
  const { data } = useQuery<GetAllProductsQuery>(getAllProducts)
  return (
    <>
      <Row>
        {data?.products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
