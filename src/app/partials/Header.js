import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
          <header className="site-header">
        <nav className="top-nav">
          <Image src="/images/Logo.png" alt="Fitcart Logo" width={150} height={50} />
          <div className="search-bar">
            <input type="search" id="site-search" name="q" aria-label="Search through site content" placeholder="What can we help you find ?" />
          </div>
          <div className="user-actions">
            <button className="login-button">Login / Sign Up</button>
            <div className="cart">
              <Image src="/images/cart.png" alt="Cart" width={32} height={32} />
            </div>
          </div>
        </nav>
        <nav className="main-nav">
          <ul>
            <li><a href="#">Shop By</a></li>
            <li><a href="#">Vitamins & Supplements</a></li>
            <li><a href="#">Proteins & Sports Nutrition</a></li>
            <li><a href="#">Wellness</a></li>
            <li><a href="#">Food & Drinks</a></li>
            <li><a href="#">Active Lifestyle</a></li>
            <li><a href="#">Plant Based</a></li>
            <li><a href="#" className="deals-button">Deals</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
