import styles from '../styles/Home.module.css'
import { List, Card } from 'antd'

export default function About({helloData}) {
    return (
      <div className={styles.container}>                
        This website is for demonstrations and experiments.
        <br/>
        Source code is available <a href="github.com/PlausibleReality/experiments">on github</a>.
        <br/>
        <br/>
        Server components:<br/>
                
        <List style= {{width: '100%'}}>
            <List.Item><Card><a href="https://expressjs.com/">ExpressJS</a></Card></List.Item>
            <List.Item><Card><a href="https://nextjs.org">NextJS</a></Card></List.Item>
            <List.Item><Card><a href="https://neo4j.com">Neo4j</a></Card></List.Item>
        </List>
            
      </div>
    )
  }