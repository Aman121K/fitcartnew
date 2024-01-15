import Image from 'next/image';

export default function Product(props) {
  const productData = props.productData;
  return (
    <>
      {(productData != undefined) ?

      
        <section className="trending-section">
          <div className="background-text trending-text">POPULAR RIGHT NOW</div>
          <div className="trending-products">
            {/* <!-- Product Listing --> */}
            {
                productData.map(
                  item => (
                      <div key={item.id} className="product-item" title={item.title}>
                      <Image src={item.image} alt={item.title} title={item.title} width={151} height={262} />
                      <div className="product-info">
                        <h3>{item.title}</h3>
                        {/* <!-- More product details can go here --> */}
                      </div>
                    </div>
                    )
                )
            }
          </div>
        </section>
        :
        ''
      }
    </>
  )
}
