import  { useState, type ChangeEvent } from 'react'

const Prob = () => {
    const [email, setEmail] =useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
  return (
    <div>
        <input type="email" value={email} onChange={handleChange}/>
    </div>
  )
}

export default Prob