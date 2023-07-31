import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
 
// import { Person, Mail } from "@material-ui/icons"


export default function Topbar({ menuOpen, setMenuOpen }) {
                                  /// these are props 
  return (
    <div className={"topbar " + (menuOpen && "active")}> 
    {/* this is    */}
      <div className="wrapper">
        <div className="left">
          {/* <a href="#intro" className="logo">
            genius.
          </a> */}
            <div className="itemContainer">
            <FontAwesomeIcon icon={faEnvelope} size="xl"  className="icon" />
            <span>aishnikam31@gmail.com</span>
          </div>

          <div className="itemContainer">
          <a href="https://github.com/nikamaish" target="_blank" rel="noopener"><FontAwesomeIcon icon={faGithub} size="xl" className="icon" /></a>
          </div>  

          <div className="itemContainer">
          <a href="https://www.linkedin.com/in/%F0%9D%90%80%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A1%F0%9D%90%B0%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%B2%F0%9D%90%9A-%F0%9D%90%8D%F0%9D%90%A2%F0%9D%90%A4%F0%9D%90%9A%F0%9D%90%A6-8175221b5/" target="_blank" rel="noopener"><FontAwesomeIcon icon={faLinkedin} size="xl" className="icon"  /></a>
          </div>
        </div>


          <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                       {/* if menuOpen is false then after clicking that it will become true, changes will made  */}

            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
