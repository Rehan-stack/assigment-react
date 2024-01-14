export default function Footer(){
    return(
<footer className="bg-warning .text-light">
  <div className="mt-5 pt-5 pb-5 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xs-12 about-company">
          <h2>Contacts</h2>
          <p className="text-light">pafiast, mang haripur</p>
          <p className="mb-0 text-light"><i className="fa fa-phone mr-3" />(123) 456789</p>
          <p className="text-light"><i className="fa fa-envelope-o mr-3 " />info@gmail.com</p>
        </div>
        <div className="col-lg-3 col-xs-12 links">
          <h4 className="mt-lg-0 mt-sm-3">Links</h4>
          <ul className="m-0 p-0">
            <li> <a className="text-light" href="#">Home</a></li>
            <li><a className="text-light" href="#">about</a></li>
            <li><a className="text-light" href="#">Services</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-xs-12 location">
          <h4 className="mt-lg-0 mt-sm-4">Social Icons</h4>
          <ul className="m-0 p-0">
            <li> <a className="text-light" href="#">Facebook</a></li>
            <li><a className="text-light" href="#">Twitter</a></li>
            <li><a className="text-light" href="#">Whattsapp</a></li>
            <li><a className="text-light" href="#">Telegram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>


    )
}