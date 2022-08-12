import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function MyFooter() {
  return (
    <footer>
      <Container>
        <Row className="text-center py-3">
          <Col>Copyright &copy; CustomShop </Col>
        </Row>
      </Container>
    </footer>
  )
}
