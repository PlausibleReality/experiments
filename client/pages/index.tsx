import styles from '../styles/Home.module.css'

const API_URL = 'https://plausiblereality.com/api/'

export default function Home({helloData}) {
  return (
    <div className={styles.container}>      
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