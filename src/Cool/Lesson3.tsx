import React, { useState } from 'react'

const Lesson3 = () => {
    const [name, setName] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleChange} />
    </div>
  )
}

export default Lesson3