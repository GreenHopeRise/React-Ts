import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  discount?: number;
  image?: string;
};

const Lesson5 = () => {
    const [product, setProduct] = useState<Product | null>(null)
  const product1: Product = {
    id: 1,
    title: "Shirt",
    price: 500,
    discount: 100,
    image: "shirt.jpg",
  };
  const product2: Product = {
    id: 2,
    title: "Pant",
    price: 800,
  };
  return <div>
    {
  product && (
    <>
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.discount}</p>
      <p>{String(product.image)}</p>
    </>
  )
}
  </div>;
};

export default Lesson5;
