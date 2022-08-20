import '../styles/globals.css'
import {ApolloProvider} from "@apollo/client"
import Client from '../apollo-client'

function MyApp({ Component, pageProps }) {
    
  return (
    <ApolloProvider client={Client}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}

export default MyApp
