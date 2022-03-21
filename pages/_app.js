import '../styles/globals.css'
import Layout from './layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet"/>
  </Head>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
