import { useRef } from 'react'
import { useState } from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'

export default function ProductCard({productName, price, thumbnailImg}){
    const likeBtn = useRef(null);
    function handleLikeClick(e) {
        console.log(e);
        console.log(e.currentTarget.classList);
        e.currentTarget.classList.toggle('on')
    }
    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button className="like-btn" ref={likeBtn} onClick={handleLikeClick}></button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
