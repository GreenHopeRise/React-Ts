import { useState, type ChangeEvent } from "react"

const InputElement = () => {
    const [form, setForm] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setForm(e.target.value)
    }
  return (
    <div>
        <input 
        value={form}
        onChange={handleChange}
         />
         <p>{form}</p>
    </div>
  )
}

export default InputElement