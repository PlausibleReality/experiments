import '../styles/globals.css'
import 'antd/dist/antd.css'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout
const { SubMenu } = Menu

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>Plausible Reality</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Layout>
        <Sider>
          <Menu>
            <Menu.Item key="home">
              <Link href="/"><a>Home</a></Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link href="/about"><a>About</a></Link>
            </Menu.Item>
            <SubMenu key="experiments" title="Experiments">
              <Menu.Item key="threejs">Three.js</Menu.Item>
              <Menu.Item key="unity">Unity</Menu.Item>           
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ height: "100vh", overflow: "auto" }}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  </div>
}

export default MyApp
