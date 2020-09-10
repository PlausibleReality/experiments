import { Anchor, Box, Paragraph, List, Heading } from 'grommet'
import { Component } from 'react'

type ComponentLink = {
  title: string,
  url: string,
  info?: string,
  see?: string[]
}

const ExpressJsInfo = `
  Typescript backend, fulfills requests to /api, has a connection to the Neo4J database
`

const NextJsInfo = `
  I found NextJS by looking for a ready-to-use frontend solution that supported React and Typescript.
  I was happy to discover that it also supports server-side rendering, building static pages at build time, and dynamic imports. 
  All that said, I am not having the best development experience. The majority of my development is taking place in Visual Studio Code 
  with an SSH connection to a remote machine that hosts the website. 'npm run dev' - the command to enable rapid iteration, consumes a great deal of resources.
  The worst case scenario seems to be navigating to different pages, so I try to only keep dev mode running if I am working on a single page.
`

const Neo4JInfo = `
  I came across Neo4J long ago while looking for a framework that could consume a GraphQL schema and automatically
  create the necessary persistence components to implement basic CRUD operations for that schema. Neo4J is a graph database, and is used in the GRANDstack project
  to do just that. Currently I'm using the Neo4J query language Cypher directly, but I am looking to test out the other GRANDstack components in the future.
`

const CaddyInfo = `
  Caddy is amazing! I had a number of issues to address. I was accessing my ExpressJS and NextJS services over http with the public IP and ports specified,
   and the problems with NextJS dev mode made iterating on static files (the Unity test) very painful. I didn't want to keep using the public IP, and I wanted a secure connection.
  I searched for something like "easy https server with proxy" and caddy was the second result. Up until this point, my only web server experience was with Apache httpd,
   which I will just say I am not a fan of configuring. In addition to simple configuration, I saw that caddy had support for automatically configuring HTTPS by acquiring SSL
   certificates via the ACME protocol. I was familiar with the ACME protocol from some professional work automating the creation of development environments, so I was excited to see how easy it might be. 
  I already had the DNS for my domain pointed at the machine the caddy server was going to run on. This let the server answer an ACME challenge and automatically acquire an SSL cert from Let's Encrypt.
`

const Pm2Info = `
  I wanted a very easy way to keep NextJS and ExpressJS running, the same way caddy set itself up to keep running. pm2 does that very well.
`

const MakeComponentSeeUrls = (c: ComponentLink) => { 
  if (!c.see) return null

  return <Box margin={{left: "10px"}}>
    See: {c.see.map(seeUrl => <Anchor href={seeUrl} key={seeUrl}>{seeUrl}</Anchor>)}
  </Box>
}

const MakeComponentParagraph = (c: ComponentLink) => 
  <Paragraph key={c.title} fill>
    <Anchor href={c.url} label={c.title}/>{c.info ? ` - ${c.info}` : null}
    { MakeComponentSeeUrls(c) }    
  </Paragraph>

const MakeComponentParagraphs = (label: string, components: ComponentLink[]) =>
  <Box flex="grow">
    <Heading size="small">{label} components:</Heading>
    <Box>{ components.map(MakeComponentParagraph) }</Box>
  </Box>

export default function About({helloData}) {
    const serverComponentLinks: ComponentLink[] = [
      { title: 'ExpressJs',   url: 'https://expressjs.com', info: ExpressJsInfo },
      { title: 'NextJS',      url: 'https://nextjs.org', info: NextJsInfo },
      { title: 'Neo4J',       url: 'https://neo4j.com', info: Neo4JInfo, see: ['https://grandstack.io/'] },
      { title: 'Caddy',       url: 'https://caddyserver.com', info: CaddyInfo, see: ['https://letsencrypt.org/'] },
      { title: 'pm2',         url: 'https://www.npmjs.com/package/pm2', info: Pm2Info }
    ]

    const frontEndComponentLinks: ComponentLink[] = [
      { title: 'React',       url: 'https://reactjs.com' },
      { title: 'Grommet',     url: 'https://v2.grommet.io' }
    ]
    
    return (
      <Box pad="medium" fill>
        <Paragraph fill>
        This website is for demonstrations and experiments. Source code is available <Anchor href="https://github.com/plausiblereality/experiments" label="on github"/>
        </Paragraph>

        { MakeComponentParagraphs("Server", serverComponentLinks) }

        { MakeComponentParagraphs("Front-end", frontEndComponentLinks) }
      </Box>
    )
  }