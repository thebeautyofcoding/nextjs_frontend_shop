import React from "react"
import MyNavbar from "./MyNavbar"
import MyFooter from "./MyFooter"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyNavbar />
      {children}
      <MyFooter />
    </>
  )
}
