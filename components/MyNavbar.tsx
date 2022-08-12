import Link from "next/link"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useAppSelector } from "../hooks/hooks"
import { openCart } from "../redux/cartSlice"

import { useAppDispatch } from "./../hooks/hooks"

export default function MyNavbar() {
  const productsInCart = useAppSelector((state) => state.cart.productsInCart)
  const isCartOpen = useAppSelector((state) => state.cart.cartOpen)
  const dispatch = useAppDispatch()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href="/">Products</Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => dispatch(openCart(!isCartOpen))}>
            <i className="fas fa-shopping-cart"></i>Cart
            <span className="bg-danger text-center text-white rounded-pill px-2 py-1 ml-2">
              {productsInCart.reduce(
                (acc, product) => acc + product.quantity,
                0
              )}
            </span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
