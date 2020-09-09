import { useState, useRef } from 'react'
import { Box, Button } from 'grommet'

declare var createUnityInstance

export default function UnityTest() {
    const unityInstance = useRef<any>(null)

    const loadUnity = (host: HTMLElement) => {
        const buildUrl = "/assets/unity_assets/build0/WebGLBuild/Build"
        const loaderUrl = buildUrl + "/WebGLBuild.loader.js"
        const config = {
            dataUrl: buildUrl + "/WebGLBuild.data.gz",
            frameworkUrl: buildUrl + "/WebGLBuild.framework.js.gz",
            codeUrl: buildUrl + "/WebGLBuild.wasm.gz",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "Plausible Reality",
            productName: "demo",
            productVersion: "0.1",
            devicePixelRatio: undefined
        }

        const container = host
        const canvas = container.querySelector("#unity-canvas") as HTMLElement
        
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            container.className = "unity-mobile"
            config.devicePixelRatio = 1
        } else {
            canvas.style.width = "960px"
            canvas.style.height = "600px"
        }

        const loaderScript = document.createElement("script")
        loaderScript.src = loaderUrl
        loaderScript.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
                
            }).then((instance) => {
                unityInstance.current = instance                
            }).catch((message) => {
                alert(message)
            })
        }
        document.body.appendChild(loaderScript)
    }

    return <Box id="unity-container" className="unity-desktop" ref={e => e && loadUnity(e)}>
        <canvas id="unity-canvas"></canvas>
        <Button primary label="Fullscreen" onClick={() => unityInstance.current && unityInstance.current.SetFullscreen(1)}/>
    </Box>
}