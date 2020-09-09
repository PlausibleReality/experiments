import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Anchor, Grommet, Menu, Sidebar, Box, List, Nav, DropButton, AccordionPanel, Accordion, Button } from 'grommet'

import { GrommetTheme } from '../theme'
import { defaultMaxListeners } from 'stream'
import { makeLink, ExperimentLinks, HomeLink, AboutLink } from '../links'

import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [showExperiments, setShowExperiments] = useState<boolean>(false)
  const router = useRouter()

  return <Grommet theme={GrommetTheme as any} full>
    <Head>
      <title>Plausible Reality</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />      
    </Head>
    
    <Box fill>
      <Box direction="row" background="light-2" fill="vertical">
          <Sidebar background="light-1">
            <Nav>
               {makeLink(HomeLink)}
               {ExperimentLinks.map(makeLink)}
               {makeLink(AboutLink)}
            </Nav>
          </Sidebar>        
          <Component {...pageProps} />
        </Box>
    </Box>

    </Grommet>
}

export default MyApp
