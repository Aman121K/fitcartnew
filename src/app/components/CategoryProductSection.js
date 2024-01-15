import Image from 'next/image';

export default function Category(props) {
  return (
    <>
      <section className="proteins-sports-nutrition">
        <div className="section-heading right">
          <h2 style={{color:'black !important'}}>{props.Title}</h2>
          <a style={{color:'black !important'}} href="#" className="shop-all">Shop All &gt;</a>
        </div>

        <div className="product-carousel">
          {/* <!-- Product 1 --> */}
          <article className="product-slider">
            <div className="img">
              <Image src="/img/slider/Group 76229.png" alt="Swisse Fish Oil" width={262} height={262} />
            </div>
            <div className="category-info">
              <h3>BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg</h3>
              <div className="category-item-price">
                <p className="price">₹ 1,500.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>

          {/* <!-- Product 2 --> */}
          <article className="product-slider">
            <div className="img">
              <Image src="/img/slider/Group 76229.png" alt="Swisse Fish Oil" width={262} height={262} />
            </div>
            <div className="category-info">
              <h3>BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg</h3>
              <div className="category-item-price">
                <p className="price">₹ 1,500.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>

          {/* <!-- Product 3 --> */}
          <article className="product-slider">
            <div className="img">
              <Image src="/img/slider/Group 76229.png" alt="Swisse Fish Oil" width={262} height={262} />
            </div>
            <div className="category-info">
              <h3>BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg</h3>
              <div className="category-item-price">
                <p className="price">₹ 1,500.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>

          {/* <!-- Product 4 --> */}
          <article className="product-slider">
            <div className="img">
              <Image src="/img/slider/Group 76229.png" alt="Swisse Fish Oil" width={262} height={262} />
            </div>
            <div className="category-info">
              <h3>BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg</h3>
              <div className="category-item-price">
                <p className="price">₹ 1,500.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
