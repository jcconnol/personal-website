import React from "react"
import MenuItems from "../components/menuItems"
import "../styles/mobilenav.css"

export default function MobileNav() {
  return (
    <div className="overlay">
        <div className="overlay-content">
          {
            MenuItems.map(item => {
              return (
                <a to={item.path} href={item.path}>{item.title}</a>
              )
            })
          }
        </div>
    </div>
  )
}