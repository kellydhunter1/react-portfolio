// import headshot from '../../assets/img/headshot.jpg';
import '../../index.css';


function Header() {
    return (
      <div>
{/* background, text and picture */}
      <div className="px-4 py-3 my-5 text-center" id="header">
      {/* <img className="img-thumbnail" src={ headshot } alt="Kelly Hunter" width="25%" /> */}
      <h1 class="display-5 text-white fw-bold">Kelly Hunter</h1>
      <div class="col-lg-6 mx-auto">
      <h2 class="lead mb-4">MERN Stack Web Developer</h2>
{/* buttons */}
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    
{/* linkedin button */}
    <a target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/kelly-d-hunter" type="submit" class="btn btn-primary btn-lg px-4 gap-3">LinkedIn</a>
    
{/* github button */}
    <a 
    target="_blank"
    rel="noreferrer"
    href="https://www.github.com/kellydhunter1" type="submit" class="btn btn-outline-secondary btn-lg px-4">GitHub</a> 
    </div>
    </div>
    </div> 
    </div>
    )
};

export default Header;



