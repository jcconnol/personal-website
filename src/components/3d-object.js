import * as React from "react"
import "../styles/3d-object.css"
import { Unity, useUnityContext } from "react-unity-webgl";
import BuildLoader from "./static/unity-build/build.loader"
import Webgl from "./static/unity-build/webgl.data"
import Framework from "./static/unity-build/build.framework.js"
import Wasm from "./static/unity-build/build.wasm"

const ThreeDUnityObject = (props) => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: BuildLoader,
        dataUrl: Webgl,
        frameworkUrl: Framework,
        codeUrl: Wasm,
    });
    
    return (
        <div className="game-container" >
            <Unity
                unityProvider={unityProvider}
                style={{ width: "90%", height: "100%" }}
            />
        </div>
    );
}

export default ThreeDUnityObject;