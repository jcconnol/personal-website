import * as React from "react"
import "../styles/test.css"
import Main from "../components/main"
import Header from "../components/header"

// markup
const test = () => {
  return (
    <div>
        
      <Header />
      <div class="wave-container">

        <div className="inner-wave-content">

            <Main>
                <div className="main-inner-container">
                <h1>
                    John Connolly
                </h1>
                <h3>
                    Engineer. Builder. Tester.
                </h3>
                </div>
            </Main>

        </div>

        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default test

