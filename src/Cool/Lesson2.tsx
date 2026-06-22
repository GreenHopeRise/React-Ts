import { useState } from "react";

type User = {
    name: string;
    age: number;
}



const Lesson2 = () => {
    const [user, setUser] = useState<User | null>(null)
  return (
    <div>
        
    </div>
  )
}

export default Lesson2