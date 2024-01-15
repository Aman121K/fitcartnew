import Image from 'next/image';

export default function Category(props) {
  const categoryData = props.categoryData;
  return (
    <>
      {(categoryData != undefined) ?
        <section className="category-section">
          <div className="background-text category-text">SHOP BY CATEGORY</div>
      <h2 className="section-ttl mb50">SHOP BY CATEGORY</h2>
      <div className="cat-wrapper">
        <div className="cat-name">
          <img src="/img/cat-bg-curve.jpg" />
          <h3>VITAMINS & SUPPLEMENTS</h3>
          <a href="#">Shop All {'>'}</a>
        </div>
          <div className="category-products">
            {
              categoryData.map(
                item => (
                  <div key={item.id} className="category-item" title={item.title}>
                    <Image src={item.image} alt={item.title} title={item.title} width={200} height={200} />
                    <div className="category-info">
                      <h3>{item.title}</h3>
                      <div className="category-item-price">
                        <p className="price">₹&nbsp;1,500&nbsp;&nbsp;</p>
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
          </div>
        </section>
        :
        ''
      }
    </>
  )
}
