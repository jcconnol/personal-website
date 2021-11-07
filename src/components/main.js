import React from "react"
import "../styles/main.css"

export default function Main({ children }) {
  //TODO make color of text easier to see
  return (
    <div className="content">
        <div className="body-section flex items-center justify-center">
            {children}
        </div>
    </div>
  )
}