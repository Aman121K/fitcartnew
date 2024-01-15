import Image from 'next/image';

export default function Footer() {
  return (
    <>
<footer className="footer">
      <div className="footer-content">
        <div className="brand-statement">
          <h2>TRUSTED BRANDS. BETTER HEALTH.</h2>
          <p>
            Fitcart will only list, sell, promote, educate and deal with brands which have CLEAN LABELS AND TRANSPARENT INGREDIENTS and do not contain any banned substances as per WADA guidelines.
          </p>
          <strong>SAY NO TO DOPING!!</strong>
        </div>
        <div className="certifications">
          <img src="img/fl1.svg" alt="" />
          <img src="img/f1.jpg" alt="" />
          <img src="img/f2.jpg" alt="" />
          <img src="img/f3.jpg" alt="" />
          <img src="img/f4.jpg" alt="" />
          <img src="img/f5.jpg" alt="" />
          <img src="img/f6.jpg" alt="" />
          <img src="img/f7.jpg" alt="" />
          <img src="img/f8.jpg" alt="" />
          <img src="img/f9.jpg" alt="" />
          <img src="img/f10.jpg" alt="" />
          <img src="img/f12.jpg" alt="" />
          <img src="img/f13.jpg" alt="" />
        </div>
      </div>
      <div className="contact-info">
        <img src="img/logo.jpg" alt="Fitcart Logo" className="footer-logo" />
        <div className="fitcart-info">
          <p>FitCart sell over 1000+ authentic products on the website</p>
          <div className="fitcart-contact">
            <a href="mailto:info@fitcart.com"><img src="img/location.svg" /> info@fitcart.com</a>
            <a href="tel:+919818517999"><img src="img/phone.svg" /> +91 98185 17999</a>
          </div>
        </div>
        <div className="fitcart-info">
          <p>We are available on WhatsApp for any customer care services</p>
          <div className="fitcart-contact">
            <a href="tel:+919818517999"><img src="img/phone.svg" /> +91 98185 17999</a>
          </div>
        </div>
        <div className="app-links">
          <a href="#" className="app-link">
            <img src="img/playstore.svg" alt="Google Play" />
          </a>
          <a href="#" className="app-link">
            <img src="img/appstore.svg" alt="App Store" />
          </a>
        </div>
      </div>
      <div className="footer-nav">
        <div className="nav-section">
          <h3>ORDER & SHIPPING</h3>
          <a href="#">Track My Package</a>
          <a href="#">Return & Cancellation Policy</a>
        </div>
        <div className="nav-section">
          <h3>PARTNERING WITH US</h3>
          <a href="#">Become An Affiliate</a>
          <a href="#">Marketing & Sponsorships</a>
          <a href="#">Advertise With Us</a>
          <a href="#">Sell On FitCart</a>
        </div>
        <div className="nav-section">
          <h3>SHOPPING GUIDE</h3>
          <a href="#">Bulk Buys</a>
          <a href="#">FitPRO Rewards</a>
          <a href="#">Product Guide</a>
          <a href="#">Trusted Health</a>
        </div>
        <div className="nav-section">
          <h3>NEED HELP</h3>
          <a href="#">Feedback</a>
          <a href="#">Email Support</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="nav-section">
          <h3>ABOUT US</h3>
          <a href="#">About Us</a>
          <a href="#">Our Story</a>
          <a href="#">Why Fitcart</a>
          <a href="#">Testimonials</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="inner-section sub-footer">
          <p className="copyright">Copyright © 2023 FitCart | All Rights Reserved</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="social-links">
            <a href="#"><img src="img/fb.svg" alt="Facebook Icon" /></a>
            <a href="#"><img src="img/insta.svg" alt="Facebook Icon" /></a>
            <a href="#"><img src="img/linkedin.svg" alt="Facebook Icon" /></a>
            <a href="#"><img src="img/twitter.svg" alt="Facebook Icon" /></a>
          </div>
        </div>
      </div>
    </footer>    
    </>
  )
}
