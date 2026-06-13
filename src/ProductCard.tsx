type ProductProps = {
  title: string;
  price: number;
  inStock: boolean;
}



const ProductCard = ({title, price, inStock}: ProductProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{inStock?'ok':'no ok'}</p>
    </div>
  )
}

export default ProductCard