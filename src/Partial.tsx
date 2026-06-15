interface Product {
  id: number;
  title: string;
  price: number;
}

type UpdateProduct = Partial<Product>


// ==> Product {
//   id?: number;
//   title?: string;
//   price?: number;
// }


interface Products {
  id: number;
  title: string;
  price: number;
  stock: number;
}

type ProductCard = Pick<Products,'title'| 'stock'>
type ProductForm = Omit<Products, 'id'>

const Card :ProductCard={
    title:'goru',
    stock:5
}

const Form: ProductForm= {
      title: 'goru',
  price: 5,
  stock: 56
}
type Status = Record<"loading" | "success" | "error", boolean>

const apiStatus: Status = {
    loading :false,
success :true,
error : false,
}
