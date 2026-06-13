import Count from "./Count"
import ObjectArray from "./ObjectArray"
import ProductCard from "./ProductCard"
import User from "./User"




function App() {


  return (
    <>
    <User name="Khalid" age={25} />
    <ProductCard title="Car" price={1000} inStock= {true}/>
    <Count/>
    <ObjectArray/>
      
    </>
  )
}

export default App
