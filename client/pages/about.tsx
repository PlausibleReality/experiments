import { Anchor, Box, Paragraph, List } from 'grommet'

type ComponentLink = {
  title: string,
  url: string
}

export default function About({helloData}) {
    const serverComponentLinks: ComponentLink[] = [
      { title: 'ExpressJs',   url: 'https://expressjs.com' },
      { title: 'NextJS',      url: 'https://nextjs.org' },
      { title: 'Neo4J',       url: 'https://neo4j.com' },
      { title: 'Caddy',       url: 'https://caddyserver.com' }
    ]

    const frontEndComponentLinks: ComponentLink[] = [
      { title: 'React',       url: 'https://reactjs.com' },
      { title: 'Grommet',     url: 'https://v2.grommet.io' }
    ]
    
    return (
      <Box pad="medium" fill>
        <Paragraph fill>
          This website is for demonstrations and experiments. Source code is available <Anchor href="https://github.com/plausiblereality/experiments" label="on github"/>
          <br/><br/>
          Server components:
            <Box pad="small">
              { serverComponentLinks.map( (i:ComponentLink) => 
                <Anchor href={i.url} label={i.title}/>
              ) }
            </Box>
          <br/><br/>          
          Front-end components:
            <Box pad="small">
              { frontEndComponentLinks.map( (i:ComponentLink) => 
                <Anchor href={i.url} label={i.title}/>
              ) }
            </Box>
          <br/><br/>
          With the exception of Neo4J, all of this is new to me. NextJS server-side rendering and dynamic imports are exciting features to try out.
          <br/><br/>
          The website is hosted on a Digital Ocean droplet, development has been done from my home desktop by connecting Visual Studio Code to the droplet over SSH.
        </Paragraph>

      </Box>
    )
  }