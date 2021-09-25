import React from "react"
import "../styles/main.css"

export default function Main({ children }) {
  return (
    <div className="content">
        <div className="body-section flex items-center justify-center">
            {children}
        </div>
    </div>
  )
}