import { useState } from "react";

type User = {
    name: string;
    age: number
}
const Lesson4 = () => {
    const [user, setUser] = useState<User |null>(null)
  return (
    <div>
        <p>{user?.name}</p>
    </div>
  )
}

export default Lesson4