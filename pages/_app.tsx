import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "./../redux/store"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Layout from "./../components/Layout"
import Cart from "./../components/Cart"
import MultiStepModal from "./../components/payment/MultiStepModal"
export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <MultiStepModal />
          <Cart />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
