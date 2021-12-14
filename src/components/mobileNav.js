import React from "react"
import MenuItems from "../components/menuItems"
import "../styles/mobilenav.css"

export default function MobileNav() {
  return (
    <div className="overlay navigation">
        <div className="overlay-content">
          {
            MenuItems.map((item, index) => {
              return (
                <a to={item.path} href={item.path} key={index}>{item.title}</a>
              )
            })
          }
        </div>
    </div>
  )
}