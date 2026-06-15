import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}
interface Discount extends Product{
    discount: number;
}



const InterFace = () => {
    const [products, setProducts] = useState<Discount>({
        id:1,
        title: 'askdf',
        price: 300,
        discount: 20
    })
  return (
    <div>
        <p>{products.title}</p>
        <p>{products.price+products.discount}</p>
    </div>
  )
}

export default InterFace