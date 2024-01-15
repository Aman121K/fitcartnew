import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
              <header className="site-header">
      <nav className="top-nav">
        <Image className="logo" src="/img/logo.jpg" alt="Fitcart Logo" width={270} height={92} />
        <div className="search-bar">
          <input type="search" id="site-search" name="q" aria-label="Search through site content" placeholder="What can we help you find ?" />
        </div>
        <div className="user-actions">
          <button className="login-button">Login / Sign Up</button>
          <div className="cart">
            <img src="img/cart.svg" alt="Cart" />
          </div>
        </div>
      </nav>
      <div className="header-bottom header-bottom-bg-color sticky-bar">
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="header-nav d-none d-lg-flex">
              <div className="main-categori-wrap d-none d-lg-block">
                <a className="categories-button-active" href="#">
                  <img src="img/shop-now.svg" /> Shop By
                  <i className="fi-rs-angle-down"></i>
                </a>
                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <a href="shop-grid-right.html"> Milks and Dairies</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Clothing &amp; beauty</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Pet Foods &amp; Toy</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Baking material</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Fresh Fruit</a>
                      </li>
                    </ul>
                    <ul className="end">
                      <li>
                        <a href="shop-grid-right.html"> Wines &amp; Drinks</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Fresh Seafood</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Fast food</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Vegetables</a>
                      </li>
                      <li>
                        <a href="shop-grid-right.html"> Bread and Juice</a>
                      </li>
                    </ul>
                  </div>
                  <div className="more_slide_open">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <a href="shop-grid-right.html"> Milks and Dairies</a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html"> Clothing &amp; beauty</a>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <a href="shop-grid-right.html"> Wines &amp; Drinks</a>
                        </li>
                        <li>
                          <a href="shop-grid-right.html"> Fresh Seafood</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="more_categories">
                    <span className="icon"></span>
                    <span className="heading-sm-1">Show more...</span>
                  </div>
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li className="hot-deals"><a href="shop-grid-right.html">Deals</a></li>
                    <li>
                      <a className="active" href="index.html">Vitamins & Supplements <i className="fi-rs-angle-down"></i></a>
                    </li>
                    <li>
                      <a href="page-about-2.html">Proteins & Sports Nutrition</a>
                    </li>
                    <li>
                      <a href="shop-grid-right.html">Wellness <i className="fi-rs-angle-down"></i></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-grid-right.html">Shop Grid – Right Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-grid-left.html">Shop Grid – Left Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-list-right.html">Shop List – Right Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-list-left.html">Shop List – Left Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth.html">Shop - Wide</a>
                        </li>
                        <li>
                          <a href="#">Single Product <i className="fi-rs-angle-right"></i></a>
                          <ul className="level-menu">
                            <li>
                              <a href="shop-product-right.html">Product – Right Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-product-left.html">Product – Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-product-full.html">Product – No sidebar</a>
                            </li>
                            <li>
                              <a href="shop-product-vendor.html">Product – Vendor Info</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-filter.html">Shop – Filter</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">Shop – Wishlist</a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shop – Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Shop – Checkout</a>
                        </li>
                        <li>
                          <a href="shop-compare.html">Shop – Compare</a>
                        </li>
                        <li>
                          <a href="#">Shop Invoice<i className="fi-rs-angle-right"></i></a>
                          <ul className="level-menu">
                            <li>
                              <a href="shop-invoice-1.html">Shop Invoice 1</a>
                            </li>
                            <li>
                              <a href="shop-invoice-2.html">Shop Invoice 2</a>
                            </li>
                            <li>
                              <a href="shop-invoice-3.html">Shop Invoice 3</a>
                            </li>
                            <li>
                              <a href="shop-invoice-4.html">Shop Invoice 4</a>
                            </li>
                            <li>
                              <a href="shop-invoice-5.html">Shop Invoice 5</a>
                            </li>
                            <li>
                              <a href="shop-invoice-6.html">Shop Invoice 6</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Food & Drinks <i className="fi-rs-angle-down"></i></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="vendors-grid.html">Vendors Grid</a>
                        </li>
                        <li>
                          <a href="vendors-list.html">Vendors List</a>
                        </li>
                        <li>
                          <a href="vendor-details-1.html">Vendor Details 01</a>
                        </li>
                        <li>
                          <a href="vendor-details-2.html">Vendor Details 02</a>
                        </li>
                        <li>
                          <a href="vendor-dashboard.html">Vendor Dashboard</a>
                        </li>
                        <li>
                          <a href="vendor-guide.html">Vendor Guide</a>
                        </li>
                      </ul>
                    </li>
                    <li className="position-static">
                      <a href="#">Active Lifestyle<i className="fi-rs-angle-down"></i></a>
                      <ul className="mega-menu">
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">Fruit &amp; Vegetables</a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">Meat &amp; Poultry</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Fresh Vegetables</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Herbs &amp; Seasonings</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Cuts &amp; Sprouts</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Exotic Fruits &amp; Veggies</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Packaged Produce</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">Breakfast &amp; Dairy</a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">Milk &amp; Flavoured Milk</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Butter and Margarine</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Eggs Substitutes</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Marmalades</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Sour Cream</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Cheese</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <a className="menu-title" href="#">Meat &amp; Seafood</a>
                          <ul>
                            <li>
                              <a href="shop-product-right.html">Breakfast Sausage</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Dinner Sausage</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Chicken</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Sliced Deli Meat</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Wild Caught Fillets</a>
                            </li>
                            <li>
                              <a href="shop-product-right.html">Crab and Shellfish</a>
                            </li>
                          </ul>
                        </li>
                        <li className="sub-mega-menu sub-mega-menu-width-22">
                          <div className="menu-banner-wrap">
                            <a href="shop-product-right.html"><img src="banner-menu.png" alt="Nest" /></a>
                            <div className="menu-banner-content">
                              <h4>Hot deals</h4>
                              <h3>
                                Don't miss<br />
                                Trending
                              </h3>
                              <div className="menu-banner-price">
                                <span className="new-price text-success">Save to 50%</span>
                              </div>
                              <div className="menu-banner-btn">
                                <a href="shop-product-right.html">Shop now</a>
                              </div>
                            </div>
                            <div className="menu-banner-discount">
                              <h3>
                                <span>25%</span>
                                off
                              </h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-category-grid.html">Plant Based <i className="fi-rs-angle-down"></i></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-category-grid.html">Blog Category Grid</a>
                        </li>
                        <li>
                          <a href="blog-category-list.html">Blog Category List</a>
                        </li>
                        <li>
                          <a href="blog-category-big.html">Blog Category Big</a>
                        </li>
                        <li>
                          <a href="blog-category-fullwidth.html">Blog Category Wide</a>
                        </li>
                        <li>
                          <a href="#">Single Post <i className="fi-rs-angle-right"></i></a>
                          <ul className="level-menu level-menu-modify">
                            <li>
                              <a href="blog-post-left.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-post-right.html">Right Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-post-fullwidth.html">No Sidebar</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="highlight-btn">
                      <a href="blog-category-grid.html">Deals</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    </>
  )
}
