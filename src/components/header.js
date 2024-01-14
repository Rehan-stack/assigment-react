
export default function Header(){
    return(

 <div className="container-fluid row align-items-center">
  <nav className="navbar fixed-top navbar-collapse navbar-expand-lg navbar-dark bg-warning">
    <a className="navbar-brand" href="#">
      <img src={require("../lo.jpg")} height={20} alt="MDB Logo" loading="lazy" />Tour pakistan
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="main_nav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active"> <a className="nav-link text-light" href="/home">Home </a> </li>
        <li className="nav-item"><a className="nav-link text-light" href="#"> About </a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/contact"> Contact </a></li>
        <li className="nav-item"><a className="nav-link text-light" href="#"> Blogs </a></li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 bg-warning" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div> {/* navbar-collapse.// */}
  </nav>
</div>


    )
}