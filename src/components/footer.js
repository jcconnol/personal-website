import * as React from "react"
import "../styles/footer.css"

export default function Footer(pageName) {
  console.log(pageName);

  return (
    <div>
      <footer>
        <div className="footer">
          © John Connolly | 2021
        </div>
      </footer>
    </div>
  )
}