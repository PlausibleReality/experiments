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
        <Paragraph>
        This website is for demonstrations and experiments. Source code is available <Anchor href="https://github.com/plausiblereality/experiments" label="on github"/>
        </Paragraph>        
        Server components:
          <Box pad="small">
            { serverComponentLinks.map( (i:ComponentLink) => 
              <Anchor href={i.url} label={i.title} key={i.title}/>
            ) }
          </Box>
        <br/><br/>          
        Front-end components:
          <Box pad="small">
            { frontEndComponentLinks.map( (i:ComponentLink) => 
              <Anchor href={i.url} label={i.title} key={i.title}/>
            ) }
          </Box>
        
      </Box>
    )
  }