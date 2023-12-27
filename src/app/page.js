import Link from 'next/link';
import Image from 'next/image';
import Header from './partials/Header';
import Footer from './partials/Footer';
import TrendingSection from './components/TrendingSection';
import CategorySection from './components/CategorySection';
import CategoryProductSection from './components/CategoryProductSection';

const productData = [
  {
    'id': 1,
    'title': 'Kinetica Whey Protein Chocolate 2.27kg',
    'price': '8,999.00',
    'image': '/images/1681132751.1410074_chooool.jpg'
  },
  {
    'id': 2,
    'title': 'Musashi Protein Crisp - Choc Peanut (Box of 12 bars)',
    'price': '3,990.00',
    'image': '/images/1695730204.942042_Box_Front.jpg'
  },
  {
    'id': 3,
    'title': 'Futurelife High Protein Meal Combo + FREE Shaker (Chocolate + Vanilla)',
    'price': '855.00',
    'image': '/images/1696532109.649969_hipt.jpg'
  },
  {
    'id': 4,
    'title': 'BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg',
    'price': '5,999.00',
    'image': '/images/1662020943.462624_Screenshot_2022-09-01_at_1.jpg'
  }
];
const categoryData = [
  {
    'id': 1,
    'title': 'Vitamins & Supplements',
    'image': '/images/1683697734.5649924_1_Mens_Multi_30.jpg'
  },
  {
    'id': 2,
    'title': 'Proteins & Sports Nutrition',
    'image': '/images/1683696913.6809466_Calcium__Vitamin_D_90_Tabs_FS.jpg'
  },
  {
    'id': 3,
    'title': 'Plant Based',
    'image': '/images/1683696913.6809466_Calcium__Vitamin_D_90_Tabs_FS.jpg'
  },
  {
    'id': 4,
    'title': 'Food & Drinks',
    'image': '/images/1683707408.0281901_1_NEW_Vegan_Collagen_Builder_30_Tabs.jpg'
  }
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="banner">
          <div className="promo-text">
            <h1>GET BETTER EVERYDAY</h1>
            <button className="article-button">Fitness Article</button>
          </div>
          <div className="promo-deals">
            <div className="deal">
              <h2>50% OFF</h2>
              <p>Your Purchase of ₹1,500.00</p>
              <button className="shop-now">Shop Now</button>
            </div>
            <div className="deal">
              <h2>50% OFF</h2>
              <p>Your Purchase of ₹1,500.00</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </section>
      </main>

      <TrendingSection productData={productData} />
      <CategorySection categoryData={categoryData} />
      <CategoryProductSection Title="WELLNESS" />
      <CategoryProductSection Title="PROTEINS & SPORTS NUTRITION" />


      <section className="knowledge-hub">
        <h2>FITCART KNOWLEDGE HUB</h2>
        <p>Informed news and developments in Health, Fitness, Nutrition and Supplements</p>
        <div className="hub-categories">
          <button className="category-button active">NEWSLETTER</button>
          <button className="category-button">ARTICLES</button>
          <button className="category-button">VIDEOS</button>
          <button className="category-button">RECIPES</button>
          <button className="category-button">SPORT</button>
          <button className="category-button">FITCART INSTAGRAM</button>
        </div>
        <div className="hub-articles">
          {/* <!-- Article 1 --> */}
          <div className="article-item">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Fitness Article</h3>
            <p>How to Gain Muscle and Lose Fat at the Same Time</p>
          </div>
          {/* <!-- Article 2 --> */}
          <div className="article-item">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Nutrition Article</h3>
            <p>What age should we start taking supplements?</p>
          </div>
          {/* <!-- Article 3 --> */}
          <div className="article-item">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Supplement News & Updates</h3>
            <p>The importance of tested sports nutrition for athletes, sports and the...</p>
          </div>
          {/* <!-- Article 4 --> */}
          <div className="article-item">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Health Article</h3>
            <p>What age should we start taking supplements?</p>
          </div>
        </div>
        <a href="#" className="view-all">View All &gt;</a>
      </section>

      <section className="consultation-section">
        <div className="consultation-header">
          <h2>CONSULT WITH OUR TRUSTED PROS</h2>
          <p>Consult with our Elite expert team of qualified and trusted professionals from their fields of health, fitness, wellness, nutrition, sport, and more to achieve your health goals.</p>
          <Image src="/images/trust-the-pro-logo.png" alt="Swisse Fish Oil" width={100} height={100} class="consultation-badge" />
        </div>

        <div className="consultation-carousel">
          <button className="carousel-arrow left-arrow" aria-label="Previous slide">&lt;</button>

          <div className="consultation-cards">
            {/* <!-- Individual Card --> */}
            <div className="consultation-card nutritionist">
              <Image src="/images/strength_and_conditioning_coach.jpg" alt="Swisse Fish Oil" width={100} height={100} />
              <p className="quote">“During my intense squash training, I rely on high quality, tested sports nutrition from Fitcart...”</p>
              <h3>Surbhi Agnihotri</h3>
              <p>Nutritionist</p>
            </div>

            <div className="consultation-card coach">
              <Image src="/images/dietician.jpg" alt="Swisse Fish Oil" width={100} height={100} />
              <h3>Strength & Conditioning Coach</h3>
            </div>

            <div className="consultation-card physiotherapist">
              <Image src="/images/chef.jpg" alt="Swisse Fish Oil" width={100} height={100} />
              <h3>Physiotherapist</h3>
            </div>
          </div>

        </div>

        <button className="carousel-arrow right-arrow" aria-label="Next slide">&gt;</button>

        <div className="carousel-indicators">
          <span className="indicator active"></span>
          {/* <!-- Repeat for additional indicators --> */}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2>TESTIMONIALS FROM ATHLETES AND FITNESS ENTHUSIASTS</h2>
        </div>

        <div className="testimonial-highlight">
          <Image src="/images/1665934667.6703787_e0e2de16-0aae-4cb6-baa2-fd074b26c974.jpg" className="featured-athlete" alt="Remy Sharp" width={500} height={500} />
          <div className="testimonial-quote">
            <p>"During my intense squash training, I rely on high quality, tested sports nutrition from Fitcart. They have the best global brands under one roof. My favorites are hydration and proteins for my squash training. "</p>
            <h3>Remy Sharp</h3>
            <p>Indian Squash Player</p>
          </div>
        </div>

        <div className="testimonial-profiles">
          {/* <!-- Repeat this block for each athlete's profile with their respective images --> */}
          <Image src="/images/1665934667.6703787_e0e2de16-0aae-4cb6-baa2-fd074b26c974.jpg" className="athlete-profile" alt="Remy Sharp" width={100} height={100} />
          <Image src="/images/1665934521.345622_Screenshot_2022-10-16_at_8.jpg" className="athlete-profile" alt="Remy Sharp" width={100} height={100} />
          <Image src="/images/1657177714.5026882_Ramji_Srinivasan1.jpg" className="athlete-profile" alt="Remy Sharp" width={100} height={100} />
          <Image src="/images/1657014734.4967034_pe0l7igjbaeii.jpg" className="athlete-profile" alt="Remy Sharp" width={100} height={100} />
          <Image src="/images/1665934421.5618258_Screenshot_2022-10-16_at_9.jpg" className="athlete-profile" alt="Remy Sharp" width={100} height={100} />
          {/* <!-- ... more profiles ... --> */}
        </div>

        <a href="#" className="view-all">View All &gt;</a>
      </section>

      <section className="why-fitcart">
        <h2>WHY FITCART?</h2>
        <div className="features">
          {/* <!-- Feature 1 --> */}
          <div className="feature-item">
            <Image src="/images/Checkmysuppliment.png" alt="Check My Supplement" width={80} height={80} />
            <h3>Check My Supplement</h3>
            <p>Our online certified product search page</p>
          </div>

          {/* <!-- Feature 2 --> */}
          <div className="feature-item">
            <Image src="/images/TrustedHealth.png" alt="Check My Supplement" width={80} height={80} />
            <h3>Trusted Health</h3>
            <p>A knowledge hub of all global certifications</p>
          </div>

          {/* <!-- Feature 3 --> */}
          <div className="feature-item">
            <Image src="/images/FitPro Rewards.png" alt="Check My Supplement" width={80} height={80} />
            <h3>FitPRO Rewards</h3>
            <p>Sign Up and Save</p>
          </div>

          {/* <!-- Feature 4 --> */}
          <div className="feature-item">
            <Image src="/images/informed fitness.png" alt="Check My Supplement" width={80} height={80} />
            <h3>Informed Fitness</h3>
            <p>Fitcart’s newsletter for informe...</p>
          </div>

          {/* <!-- Feature 5 --> */}
          <div className="feature-item">
            <Image src="/images/TrustPilot copy.png" alt="Check My Supplement" width={80} height={80} />
            <h3>Track My Package</h3>
            <p>Our logistics solution</p>
          </div>

          {/* <!-- Feature 6 --> */}
          <div className="feature-item">
            <Image src="/images/FitPro Rewards.png" alt="Check My Supplement" width={80} height={80} />
            <h3>Trustpilot</h3>
            <p>Our customer reviews and feedback</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
