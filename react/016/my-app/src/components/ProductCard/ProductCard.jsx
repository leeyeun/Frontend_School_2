import ProductName from '../ProductName/ProductName';
import ProductImage from '../ProductImages/ProductImages';
import ProductPrice from '../ProductPrice/ProductPrice';
import './productCard.css';
export default function ProductCard({productName, price, thumbnailImg}){
  return (
    <li className="product-item">
      <div className="product-img">
          <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
      </div>
          <ProductName productName={productName}/>
      <button className="like-btn"></button>
      <div className="product-price">
          <ProductPrice price={price}/>
      </div>
    </li>
  )
}