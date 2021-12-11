import React from "react"
import Header from './header'
import menuItems from './menuItems';

export default function Layout({ children }) {
  //TODO make fade in for things on pages
  return (
    <div>
      {children}
    </div>
  )
}
