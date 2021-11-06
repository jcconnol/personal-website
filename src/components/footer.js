import * as React from "react"
import "../styles/footer.css"
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';

const Footer = (props) => {
  const pageName = props.pageName;
  //TODO footer name and stuff left justify and put linkedin fb and GH on right
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
                <div className="left">
                © John Connolly | 2021
                </div>
                <div className="right">
                <FaLinkedinIn /> <BsGithub /> <CgFacebook />
                </div>
              </div>
            </>
            : null
        }
      </footer>
    </div>
  )
}

export default Footer;