import Image from "next/image"
import React from "react"
import { Card } from "react-bootstrap"
import { Product as ProductType } from "../graphql/types"
import Link from "next/link"
export default function Product({ product }: { product: ProductType }) {
  return (
    <Card>
      <Link href={`/product/${product.id}`}>
        <Image
          src={`${product.image}`}
          alt={product.name}
          width={200}
          height={200}
          objectFit={"contain"}
        />
      </Link>
    </Card>
  )
}
