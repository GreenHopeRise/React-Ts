import Lesson1 from "./Cool/Lesson1"
import Lesson4 from "./Cool/Lesson4"
import Count from "./Count"
import InputElement from "./InputElement"
import ObjectArray from "./ObjectArray"
import ProductCard from "./ProductCard"
import T2 from "./T2"
import User from "./User"




function App() {


  return (
    <>
    <User name="Khalid" age={25} />
    <ProductCard title="Car" price={1000} inStock= {true}/>
    <Count/>
    <ObjectArray/>
    <InputElement/>
    <T2/>
    <Lesson1 name="Khalid" age={24}/>
    <Lesson4 />
      
    </>
  )
}

export default App
