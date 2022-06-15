import { useContext, useEffect, useState } from 'react'
import { data } from '../../asset/data/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {
  // const [loadData, setLoadData] = useState([]);
  // useEffect(() => {
  //   console.log('로딩중...');
  // }, [loadData])
  const loaddata = useContext(data);
  console.log(loaddata);
  return (
    <main className="product">
        <ul className="product-list">
        {/* {loaddata.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
        )} */}
        </ul>
        <a className='link-btn cart-link' href='#'></a>
    </main>
  )
}
