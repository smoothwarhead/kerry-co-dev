import { Link } from "react-router-dom"
import { customerSupport } from "../../../utils/inputs"
import "./footer.css";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";












const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-con">
        <div className="footer-els footer-contact">
          <div className="footer-el-title">KerryCo</div>
          <div className="footer-el-els"></div>

        </div>



        <div className="footer-els footer-customer">
          <div className="footer-el-title">Customer Support</div>
          <div className="footer-el-els">
            {
              customerSupport.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                >
                  {link.title}
                </Link>
              ))
            }
          </div>
        </div>


        <div className="footer-els footer-follow">

        <div className="footer-el-title">Follow Us</div>
          <div className="footer-el-els">

            <span className="follow-top">Stay tuned on:</span>
            <span className="follow-btm">
              <FaInstagramSquare 
                className="footer-icon"
              />
              <FaFacebookSquare 
                className="footer-icon"

              />
            </span>

          </div>
         

        </div>

      </div>
    </div>
  )
}

export default Footer