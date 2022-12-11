import * as React from "react"
import "../styles/3d-object.css"
import { Unity, useUnityContext } from "react-unity-webgl";

const ThreeDUnityObject = (props) => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "unity-build/build.loader.js",
        dataUrl: "unity-build/webgl.data",
        frameworkUrl: "unity-build/build.framework.js",
        codeUrl: "unity-build/build.wasm",
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