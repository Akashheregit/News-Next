import '@/styles/globals.css'
// import searchbar from '../components/searchbar'
// import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

 function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}


export default App