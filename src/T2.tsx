import { useState } from "react";

type Product= {
    id: number;
    title: string;
    price: number;
    discount?: number;
    image?: boolean;
}




const T2 = () => {
    const [product, setProduct] =useState<Product| null>(null)
    const handleClick = ()=>{
    setProduct({
        id: 1,
        title: 'jama',
        price: 400,
        discount: 100,
        image: true
        
    })


}
  return (
    <div>
        <button onClick={handleClick}>load Data</button>
        {
            
            product&& <p> {product.title}</p>
        }
    </div>
  )
}

export default T2