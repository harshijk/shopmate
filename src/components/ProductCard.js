import "./ProductCard.css";
import { useCart } from "../context/CardContext";
import { useEffect } from "react";
import { useState } from "react";

export const ProductCard = ({product}) => {
  const {id , name, price, image} = product;
  const { addToCart , cartList , removeFromCart} = useCart();
  const [isItcart , setIstCart] = useState(false);

  useEffect(() => {
    const productIsIt = cartList.find(element => element.id === id)
    if(productIsIt){
      setIstCart(true)
    }else{
      setIstCart(false)
    }
  
  }, [cartList,id])
  

  return (
    <>
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isItcart ?  <button className="remove" onClick={()=>removeFromCart(product)}>Remove</button>:<button onClick={()=>addToCart(product)}>Add To Cart</button> }
        
      </div>
    </div>
    </>
  )
}
