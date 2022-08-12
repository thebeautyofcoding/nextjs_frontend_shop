import React from "react"
import { Stack } from "react-bootstrap"
import { useAppSelector } from "../../hooks/hooks"
export default function Summary() {
  const productsInCart = useAppSelector((state) => state.cart.productsInCart)
  const total = useAppSelector((state) => state.cart.total)
  return (
    <Stack className="mb-3">
      {productsInCart.map((product) => (
        <Stack direction="horizontal" key={product.id}>
          <Stack direction="horizontal" gap={2}>
            <div>{product.name}</div>
            <div>
              {product.quantity} x {product.price}
            </div>
          </Stack>
        </Stack>
      ))}
      <div className="border-2 border-top my-2 ">
        Total: <span className="text-secondary">{total}</span>
      </div>
    </Stack>
  )
}
