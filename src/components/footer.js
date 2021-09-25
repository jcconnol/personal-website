import * as React from "react"
import "../styles/footer.css"

const Footer = (props) => {
  const pageName = props.pageName;

  if(pageName !== "index"){
    var footerText = "© John Connolly | 2021"
  }

  return (
    <div>
      <footer>
        <div className="footer-line">
          <hr />
        </div>
        <div className="footer">
          {footerText}
        </div>
      </footer>
    </div>
  )
}

export default Footer;