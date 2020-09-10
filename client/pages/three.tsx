import { Box, Button } from 'grommet'
import dynamic from 'next/dynamic'
import { useState, useCallback, useRef } from 'react'

export default function ThreeTest() {
    const [threeHost, setThreeHost] = useState<any>(null)
    const threeBox = useRef<HTMLElement>()
    
    const ThreeHost = dynamic(
        import('../components/three_host'),
        { loading: () => <span>Loading Three Host</span> }
    )

    return <Box fill>
        <ThreeHost></ThreeHost>
    </Box>
}