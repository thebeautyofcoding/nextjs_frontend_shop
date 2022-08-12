import React from "react"
import { Form } from "react-bootstrap"

export default function Address() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Email...">
        <Form.Label>Name...</Form.Label>
        <Form.Control type="text" placeholder="Name..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email...">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Adress..." />
      </Form.Group>
    </Form>
  )
}
