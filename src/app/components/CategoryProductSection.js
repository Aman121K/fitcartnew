import Image from 'next/image';

export default function Category(props) {
  return (
    <>
        <section className="proteins-sports-nutrition">
        <div className="section-heading">
          <h2>{props.Title}</h2>
          <a href="#" className="shop-all">Shop All &gt;</a>
        </div>

        <div className="product-carousel">
          {/* <!-- Product 1 --> */}
          <article className="product">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={262} height={262} />
            <h3>BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg</h3>
            <p className="price">₹ 1,500.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </article>

          {/* <!-- Product 2 --> */}
          <article className="product">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={262} height={262} />
            <h3>Explosive Whey Athlete Standard Whey Protein - Coffee, 1kg</h3>
            <p className="price">₹ 1,500.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </article>

          {/* <!-- Product 3 --> */}
          <article className="product">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={262} height={262} />
            <h3>Explosive Whey ATHLETE SERIES BCAA - Watermelon</h3>
            <p className="price">₹ 1,500.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </article>

          {/* <!-- Product 4 --> */}
          <article className="product">
            <Image src="/images/swiss4xstrength.png" alt="Swisse Fish Oil" width={262} height={262} />
            <h3>BSC Nitrovol Lean Muscle - Divine Milk Chocolate 1.5kg</h3>
            <p className="price">₹ 1,500.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </article>
        </div>
      </section>
    </>
  )
}
