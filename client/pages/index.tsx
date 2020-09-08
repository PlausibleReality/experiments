const API_URL = 'https://plausiblereality.com/api/'

export default function Home({helloData}) {
  return (
    <div>
      Coming soon, an experiment!
    </div>
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