import Image from 'next/image';

export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="footer-content">
          <div className="brand-statement">
            <h2>TRUSTED BRANDS. BETTER HEALTH.</h2>
            <p>Fitcart will only list, sell, promote, educate and deal with brands which have CLEAN LABELS AND TRANSPARENT INGREDIENTS and do not contain any banned substances as per WADA guidelines.</p>
            <strong>SAY NO TO DOPING!!</strong>
          </div>
          <div className="certifications">
          <Image src="/images/fl2.svg" alt="FSSAI" width={50} height={50} />
          <Image src="/images/fl3.svg" alt="USDA Organic" width={50} height={50} />
          </div>
          <div className="contact-info">
            <div className="fitcart-info">
            <Image src="/images/bottomLogo.png" alt="Fitcart" width={100} height={50} />
              <p>FitCart sell over 1000+ authentic products on the website</p>
              <a href="mailto:info@fitcart.com">info@fitcart.com</a>
              <a href="tel:+919818517999">+91 98185 17999</a>
            </div>
            <div className="app-links">
              <a href="#" className="app-link">
              <Image src="/images/play.png" alt="Google Play" width={120} height={40} />
              </a>
              <a href="#" className="app-link">
              <Image src="/images/app_store.png" alt="App Store" width={120} height={40} />
              </a>
            </div>
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
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="social-links">
            <a href="#"><Image src="/images/Facebook.svg" alt="Facebook Icon" width={30} height={30} /></a>
            <a href="#"><Image src="/images/Instagram.svg" alt="Instagram Icon" width={30} height={30} /></a>
            {/* <!-- ... other social media icons ... --> */}
          </div>
          <p className="copyright">Copyright © 2023 FitCart | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
