import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ActiveSectionContextProvider from "@/context/active-section-context";


export default function App({ Component, pageProps }: AppProps) {
  return <ActiveSectionContextProvider> <Component {...pageProps} />  </ActiveSectionContextProvider>
  
}
