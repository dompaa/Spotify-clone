import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  
  return (
    //HOC - higher order components
  <SessionProvider session={session}>
      <RecoilRoot>
    <Component {...pageProps} />
      </RecoilRoot>
  </SessionProvider>
  
  )
}

export default MyApp
