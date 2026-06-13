import { useState } from "react";

type Users = {
    name: string;
    age: number;
}



const T1 = () => {
    const [users, setUsers] = useState<Users |null>(null)
  return (
    <div>
        <p>{users.age}</p>
    </div>
  )
}

export default T1