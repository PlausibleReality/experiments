import { Box, Button } from 'grommet'
import { useState, useCallback, useRef } from 'react'
import * as Three from 'three'

export default function ThreeHost() {
    const [isInitialized, setIsInitialized] = useState<boolean>(false)    
    const host = useRef<HTMLElement>()
    const renderer = useRef<Three.Renderer>()
    const scene = useRef<Three.Scene>()
    const camera = useRef<Three.Camera>()

    const threeInit = (hostElement: HTMLElement) => {
        host.current = hostElement
        camera.current = new Three.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 )
        camera.current.position.z = 1
    
        scene.current = new Three.Scene()
    
        const geometry: Three.Geometry = new Three.BoxGeometry( 0.2, 0.2, 0.2 )
        const material: Three.Material = new Three.MeshNormalMaterial()
    
        const mesh = new Three.Mesh( geometry, material )
        scene.current.add( mesh )
        
        renderer.current = new Three.WebGLRenderer({antialias: true})
        renderer.current.setSize(512, 512)

        host.current.appendChild( renderer.current.domElement )

        console.log(renderer.current)

        animate()
    }

    const animate = () => {
        requestAnimationFrame(animate)

        renderer.current.render( scene.current, camera.current )
    }

    return <Box ref={e => e && threeInit(e)}>
        
    </Box>
}