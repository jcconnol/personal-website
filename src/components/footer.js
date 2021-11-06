import * as React from "react"
import "../styles/footer.css"
import { FaLinkedinIn, BsGithub, CgFacebook } from 'react-icons/fa';

const Footer = (props) => {
  const pageName = props.pageName;

  return (
    <div>
      <footer>
        {
          pageName !== "index" ?
            <>
              <div className="footer-line">
                <hr />
              </div>
              <div className="footer">
                © John Connolly | 2021
              </div>
            </>
            : null
        }
      </footer>
    </div>
  )
}

export default Footer;