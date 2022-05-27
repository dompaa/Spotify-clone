import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  
  return (
    //HOC - higher order components
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
  
  )
}

export default MyApp
