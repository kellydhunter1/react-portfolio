import headshot from '../../assets/img/headshot.jpg';

function Header() {
    return (
        <div>

<div class="px-4 py-3 my-5 text-center">
<img className="img-thumbnail" src={ headshot } alt="Kelly Hunter" width="25%" />
<h1 class="display-5 fw-bold">Kelly Hunter</h1>
<div class="col-lg-6 mx-auto">
  <h2 class="lead mb-4">MERN Stack Web Developer</h2>
  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" class="btn btn-primary btn-lg px-4 gap-3">LinkedIn</button>
    <button type="button" class="btn btn-outline-secondary btn-lg px-4">GitHub</button>
  </div>
</div>
</div> 
        </div>
    )
};

export default Header;



