import Image from 'next/image';

export default function Category(props) {
  const categoryData = props.categoryData;
  return (
    <>
      {(categoryData != undefined) ?
        <section className="category-section">
          <div className="background-text category-text">SHOP BY CATEGORY</div>
          <div className="category-products">
            {
              categoryData.map(
                item => (
                  <div key={item.id} className="category-item" title={item.title}>
                    <Image src={item.image} alt={item.title} title={item.title} width={200} height={200} />
                    <div className="category-info">
                      <h3>{item.title}</h3>
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
