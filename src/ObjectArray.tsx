import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};



const ObjectArray = () => {
    const [product, setProduct] = useState<Product[]>([
        {
    id: 1,
    title: "Laptop",
    price: 50000,
  }
    ])
  return (
    <div>
        <p>
            {
                product.map(ps=>(
                    <div>
                        <p>{ps.id}</p>
                    <p>{ps.price}</p>
                    <p>{ps.title}</p>
                    </div>
                ))
            }
        </p>
    </div>
  )
}

export default ObjectArray