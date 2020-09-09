
import { Box, Paragraph } from 'grommet'
import { ExperimentLinks, makeLink } from '../links'

const API_URL = 'https://plausiblereality.com/api/'

export default function Home({helloData}) {
  return (
    <Box pad="medium">
      <Paragraph>
        Check out an experiment:<br/>
        { ExperimentLinks.map(i => (
          <span key={i.label}>🧪 {makeLink(i)}<br/></span>
        )) }
      </Paragraph>
    </Box>
  )
}

export async function getServerSideProps(context) {  
  const resp = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-Remote-Address': context.req.headers['x-forwarded-for']
    }
  })

  const helloData = await resp.json()

  return {
    props: {
      helloData
    }
  }
}