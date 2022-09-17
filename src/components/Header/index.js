// import headshot from '../../assets/img/headshot.jpg';
import logo from '../../assets/img/portfolio-logo.png'
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Header() {
    return (
      <div>
{/* background, text and picture */}
      <div className=" container-fluid text-center" id="header">
        <img className="img-rounded logo" width="15%" margin="30px 35% 0" src={ logo } alt="logo with initials KH" />
      {/* <img className="img-thumbnail" src={ headshot } alt="Kelly Hunter" width="25%" /> */}
      <h1 className="display-5 title fw-bold col-lg-3 mx-auto text-white">Kelly Hunter</h1>
      <div className="col-lg-6 mx-auto">
      <h2 className="lead fw-bold text-white">Full Stack Web Developer</h2>
      </div>

{/* icons */}
      <div className="d-flex flex-row justify-content-center">
    
{/* linkedin icon */}
    <a target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/kelly-d-hunter" type="submit" className="icon-links p-3"><FontAwesomeIcon icon={brands("linkedin")} size="1x" /></a>
    
{/* github button */}
    <a
    target="_blank"
    rel="noreferrer"
    href="https://www.github.com/kellydhunter1" type="submit" className="icon-links p-3"><FontAwesomeIcon icon={brands("github")} size="1x" /></a> 
    </div>    </div>
    </div>

    )
};

export default Header;



