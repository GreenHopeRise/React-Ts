type ProductProps = {
    title: string;
    price: number;
    inStock: boolean;
}



const ProductCard = (props: ProductProps) => {
  return (
    <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
        <p>{props.inStock&& 'ys'}</p>
    </div>
  )
}

export default ProductCard