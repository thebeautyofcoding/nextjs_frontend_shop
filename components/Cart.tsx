import Image from "next/image"
import React, { useState } from "react"
import { Container, Stack } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import { useAppSelector } from "../hooks/hooks"
import { openCart } from "../redux/cartSlice"
import { openModal } from "../redux/paymentModalSlice"
import { useAppDispatch } from "./../hooks/hooks"

export default function Cart() {
  const dispatch = useAppDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => dispatch(openCart(false))
  const handleShow = () => dispatch(openCart(true))
  const cartOpen = useAppSelector((state) => state.cart.cartOpen)
  const productsInCart = useAppSelector((state) => state.cart.productsInCart)
  const total = useAppSelector((state) => state.cart.total)
  return (
    <>
      <Offcanvas show={cartOpen} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={2}>
            {productsInCart.length > 0 ? (
              productsInCart.map((product) => (
                <Stack key={product.id} direction="horizontal">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <Container>
                    <Stack gap={2}>
                      <div>{product.name}</div>
                      <div>
                        {product.quantity} x {product.price}
                      </div>
                    </Stack>
                  </Container>
                  <div>{product.quantity * product.price}</div>
                </Stack>
              ))
            ) : (
              <div>No products in cart</div>
            )}

            <div className="boder-2 border-top mt-3 py-3">
              Total:<span className="text-secondary">{total}</span>
            </div>
            {total > 0 && (
              <Button onClick={() => dispatch(openModal(true))}>Pay</Button>
            )}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
