import Header from "../components/header";
import Footer from "../components/footer";

export default function Home(){
    return(

        <>
        <Header/>
<div>
  <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
    <div className="carousel-indicators">
      <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100" alt="Wild Landscape" />
        <div className="carousel-caption">
          <h3>Best tour company in pakistan</h3>
          <p>we provide all tour guides and trips in every part of pakistan</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera" />
        <div className="carousel-caption">
          <h3>What we do</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div><br />
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">About Us</h1>
      <p className="lead">We are a traveling company in pakistan. Learn more about our services</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg bg-warning" href="#" role="button">Learn more</a>
      </p>
    </div>
  </div><br />
  <div className="row">
    <div className="col-4">
      <div className="card" style={{width: 400}}>
        <img className="card-img-top" style={{width: 400, height: 200}} src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">Chitral</h4>
          <p className="card-text">Go to chitral</p>
          <a href="#" className="btn btn-primary bg-warning">See details</a>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card" style={{width: 400}}>
        <img className="card-img-top" style={{width: 400, height: 200}} src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">Swat</h4>
          <p className="card-text">Go to swat</p>
          <a href="#" className="btn btn-primary bg-warning">See details</a>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card" style={{width: 400}}>
        <img className="card-img-to" style={{width: 400, height: 200}} src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">Naran</h4>
          <p className="card-text">go to naran</p>
          <a href="#" className="btn btn-primary bg-warning">See details</a>
        </div>
      </div>
    </div>
  </div><br />
  <div className="row">
    <div className="col-6">
      <div className="d-flex align-items-center">
        <span>Feedback: </span>
        <div className="progress-bar bg-success " style={{width: '70%'}}>100%</div>
      </div><br />
      <div className="d-flex align-items-center">
        <span>Satisfaction: </span>
        <div className="progress-bar bg-warning" style={{width: '50%'}}>70%</div>
      </div><br />
      <div className="d-flex align-items-center">
        <span>Support: </span>
        <div className="progress-bar bg-danger" style={{width: '1000%'}}>70%</div>
      </div>
    </div>
    <div className="col-6">
      <div className="row">
        <div className="col-3">
          <span className="badge rounded-pill  bg-warning">Kpk</span>
        </div>
        <div className="col-3">     
          <span className="badge rounded-pill  bg-warning">Balochistan</span>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <span className="badge rounded-pill  bg-warning">Sindh</span>
        </div>
        <div className="col-3">
          <span className="badge rounded-pill  bg-warning">Punjab</span>
        </div>
      </div>
    </div>
  </div><br />
  <div className="row">
    <div className="col-6">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Karachi
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>this is the first city</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lahore
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>this is the second city</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Quetta
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>this is the third city</p>    </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              kpk
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>this is the first province</p>    </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              punjab
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>this is the second provice</p>    </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Sindh
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>this is the third province</p>    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>

        
        </>
    )
}