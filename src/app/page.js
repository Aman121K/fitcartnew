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
    'image': '/img/trending-p1.png'
  },
  {
    'id': 2,
    'title': 'Musashi Protein Crisp - Choc Peanut (Box of 12 bars)',
    'price': '3,990.00',
    'image': '/img/trending-p2.png'
  },
  {
    'id': 3,
    'title': 'Futurelife High Protein Meal Combo + FREE Shaker (Chocolate + Vanilla)',
    'price': '855.00',
    'image': '/img/trending-p3.png'
  }/*
  ,
  {
    'id': 4,
    'title': 'BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg',
    'price': '5,999.00',
    'image': '/images/1662020943.462624_Screenshot_2022-09-01_at_1.jpg'
  }
   */
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
      <section className="info-news-wrapper">
      <div className="info-news">
        <p>Fitcart.com Indiaâ€™s e-commerce for safe, tested, trusted nutrition and global brands</p>
      </div>
    </section>
    <main>
      <section className="banner">
		<div className="section-left-wrapper">
			<img src="/img/banner-lg2.jpg" alt="Slide 1" />
		</div>
		<div className="section-right-wrapper">
			<div className="section-right-top">
				<img src="/img/banner-sm1.jpg" alt="Slide 1" />
			</div>
			<div className="section-right-bottom">
				<img src="/img/banner-sm2.jpg" alt="Slide 1" /></div>
			</div>        
      </section>
    </main>

      <TrendingSection productData={productData} />
      <CategorySection categoryData={categoryData} />
      <CategoryProductSection Title="WELLNESS" />
      <CategoryProductSection Title="PROTEINS & SPORTS NUTRITION" />
      <CategoryProductSection Title="FOOD & DRINKS" />

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
            <Image src="/img/kn.jpg" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Fitness Article</h3>
            <p>How to Gain Muscle and Lose Fat at the Same Time</p>
          </div>
          {/* <!-- Article 2 --> */}
          <div className="article-item">
            <Image src="/img/kn1.jpg" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Nutrition Article</h3>
            <p>What age should we start taking supplements?</p>
          </div>
          {/* <!-- Article 3 --> */}
          <div className="article-item">
            <Image src="/img/kn2.jpg" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Supplement News & Updates</h3>
            <p>The importance of tested sports nutrition for athletes, sports and the...</p>
          </div>
          {/* <!-- Article 4 --> */}
          <div className="article-item">
            <Image src="/img/kn3.jpg" alt="Swisse Fish Oil" width={150} height={150} />
            <h3>Health Article</h3>
            <p>What age should we start taking supplements?</p>
          </div>
        </div>
        <a href="#" className="view-all">View All &gt;</a>
      </section>

      <section className="consultation-section">
      <div className="inner-section">
        <div className="consultation-header">
          <h2>CONSULT WITH OUR TRUSTED PROS</h2>
          <p>Consult with our Elite expert team of qualified and trusted professionals from their fields of health, fitness, wellness, nutrition, sport, and more to achieve your health goals.</p>
        </div>
        <div className="consult-wrapper">
          <div className="consult-text">
            <img src="img/trust.jpg" alt="Certified Pros Trusted" className="consultation-badge" />
            <p>
              “During my intense squash training, I rely on high quality, tested sports nutrition from Fitcart. They have the best global brands under one roof. My favorites are hydration and proteins
              for my squash training.”
            </p>
            <h3>Surbhi Agnihotri</h3>
            <p>Nutritionist</p>
          </div>

          <div className="consultation-carousel">
            <button className="carousel-arrow left-arrow" aria-label="Previous slide">&lt;</button>

            <div className="consultation-cards">
              <div className="consultation-card nutritionist">
                <img src="img/doc3.jpg" alt="Surbhi Agnihotri - Nutritionist" />
              </div>

              <div className="consultation-card coach">
                <img src="img/doc2.jpg" alt="Strength & Conditioning Coach" />
                <h3>Strength & Conditioning Coach</h3>
              </div>

              <div className="consultation-card physiotherapist">
                <img src="img/doc1.jpg" alt="Physiotherapist" />
                <h3>Physiotherapist</h3>
              </div>
            </div>
          </div>

          <button className="carousel-arrow right-arrow" aria-label="Next slide">&gt;</button>

          <div className="carousel-indicators">
            <span className="indicator active"></span>
          </div>
        </div>
      </div>
    </section>


    <section className="testimonials-section">
      <div className="inner-section">
        <div className="background-text trending-text">HEAR FROM OUR ATHLETES AND EXPERTS</div>
        <div className="testimonials-header">
          <h2>TESTIMONIALS FROM ATHLETES AND FITNESS ENTHUSIASTS</h2>
        </div>

        <div className="testimonial-highlight">
          <img src="img/athlete-lg.png" alt="Featured Athlete" className="featured-athlete" />
          <div className="testimonial-quote">
            <p>
              "During my intense squash training, I rely on high quality, tested sports nutrition from Fitcart. They have the best global brands under one roof. My favorites are hydration and proteins
              for my squash training."
            </p>
            <h3>SAURAV GHOSHAL</h3>
            <p>Indian Squash Player</p>
          </div>
        </div>

        <div className="ath-wrapper">
          <div className="testimonial-profiles">
            <img src="img/ath-1.jpg" alt="Athlete Profile" className="athlete-profile" />
            <img src="img/ath-2.jpg" alt="Athlete Profile" className="athlete-profile" />
            <img src="img/ath-3.jpg" alt="Athlete Profile" className="athlete-profile" />
            <img src="img/ath-4.jpg" alt="Athlete Profile" className="athlete-profile" />
            <img src="img/ath-5.jpg" alt="Athlete Profile" className="athlete-profile" />
          </div>

          <a href="#" className="view-all">View All &gt;</a>
        </div>
      </div>
    </section>

    <section className="why-fitcart">
      <div className="inner-section">
        <div className="background-text trending-text">WHY FITCART?</div>
        <h2>WHY FITCART?</h2>
        <div className="features">
          <div className="feature-item">
            <img src="img/f7.jpg" alt="Check My Supplement" />
            <h3>Check My Supplement</h3>
            <p>Our online certified product search page</p>
          </div>

          <div className="feature-item">
            <img src="img/f6.jpg" alt="Trusted Health" />
            <h3>Trusted Health</h3>
            <p>A knowledge hub of all global certifications</p>
          </div>

          <div className="feature-item">
            <img src="img/f8.jpg" alt="FitPRO Rewards" />
            <h3>FitPRO Rewards</h3>
            <p>Sign Up and Save maximum</p>
          </div>

          <div className="feature-item">
            <img src="img/why1.jpg" alt="Informed Fitness" />
            <h3>Informed Fitness</h3>
            <p>Fitcart’s newsletter for informed science news</p>
          </div>

          <div className="feature-item">
            <img src="img/why2.jpg" alt="Track My Package" />
            <h3>Track My Package</h3>
            <p>With our logistics solutions</p>
          </div>

          <div className="feature-item">
            <img src="img/why3.jpg" alt="Trustpilot" />
            <h3>Trustpilot</h3>
            <p>Our customer reviews and feedback</p>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  )
}
