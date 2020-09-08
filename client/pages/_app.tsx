import Head from 'next/head'
import Link from 'next/link'

import { Grommet, Main, Sidebar, Box, List, Anchor } from 'grommet'

import { GrommetTheme } from './_theme'

type LinkInfo = {url: string, label: string}

const links: LinkInfo[] = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' }
]

function MyApp({ Component, pageProps }) {
  return <Grommet theme={GrommetTheme} full>
    <Head>
      <title>Plausible Reality</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />      
    </Head>
    
    <Box fill>
      <Box direction="row" background="light-2" fill="vertical">
          <Sidebar background="light-1">
            <List 
              data = {links}
              children = {(datum: LinkInfo, index) =>
                <Link href={datum.url}><Anchor href={datum.url} label={datum.label}/></Link>
              }
            />          
          </Sidebar>        

          <Component {...pageProps} />
        </Box>
    </Box>

    </Grommet>
}

export default MyApp
