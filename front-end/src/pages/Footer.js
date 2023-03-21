import React from "react";

const Footer = () => {
  return (
    <footer class="footer" id='footer'>
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">watch</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">shoes</a>
              </li>
              <li>
                <a href="#">dress</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="bg-dark text-center text-white footer">
<div className="container p-4">
  <section className="mb-4">
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-facebook-f"></i></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-twitter"></i></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-google"></i></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-instagram"></i></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-linkedin-in"></i></a>

    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
      ><i className="fab fa-github"></i></a>
  </section>

  <section className="">
    <form action="">
      <div className="row d-flex justify-content-center">

        <div className="col-auto">
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div className="col-md-5 col-12">
          <div className="form-outline form-white mb-4">
            <input type="email" id="form5Example21" className="form-control" />
            <label className="form-label" for="form5Example21">Email address</label>
          </div>
        </div>

        <div className="col-auto">

          <button type="submit" className="btn btn-outline-light mb-4">
            Subscribe
          </button>
        </div>

      </div>
    </form>
  </section>

  <section className="mb-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
      repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
      eum harum corrupti dicta, aliquam sequi voluptate quas.
    </p>
  </section>

  <section className="">
    <div className="row">

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 4</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Link 1</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 2</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 3</a>
          </li>
          <li>
            <a href="#!" className="text-white">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>

<div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  © 2020 Copyright:
  <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>

</footer> */
}
