import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
