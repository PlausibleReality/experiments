import Link from 'next/link'
import { Anchor }  from 'grommet'

export type LinkInfo = {url: string, label: string}

export const HomeLink:LinkInfo = { url: '/', label: 'Home' }
export const AboutLink:LinkInfo = { url: '/about', label: 'About' }

export const ExperimentLinks: LinkInfo[] = [
  { url: '/unity', label: 'Unity test' },
  { url: '/three', label: 'Three.js test' }
]

export const makeLink = (info:LinkInfo) =>
  <Link href={info.url}><Anchor href={info.url} label={info.label}/></Link>