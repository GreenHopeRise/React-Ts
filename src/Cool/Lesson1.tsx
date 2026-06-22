type UserProps ={
    name: string
    age: number

}


const Lesson1 = ({name, age}: UserProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Lesson1