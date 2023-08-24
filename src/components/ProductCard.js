import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const ProductCard = ({product}) => {
  const options = {
      edit: false,
      color: "rgba(20, 20, 20, 0.1)",
      activeColor: "tomato",
      value: product.rating-0.5,
      isHalf: true,
      size: window.innerWidth < 600 ? 20 : 25
  }

  return (
    <Link className="productCard" to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.name}/>
        <p>{product.title}</p>
        <div>
            <ReactStars {...options}/>
        </div>
        <span>{`₹${product.price}`}</span>
    </Link>
  )
}

export default ProductCard