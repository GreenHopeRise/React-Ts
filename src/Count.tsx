import React, { useState } from "react";
import User from "./User";
type User = {
  name: string;
  age: number;
};

const Count = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setName] = useState<User>({
    name: "khalid",
    age: 4,
  });
  const handleCount = () => {
    setCount(count + 1)
    setName({
        name:' robi',
        age: 5
    })
};
  return (
    <div>
      <p>{count}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <button onClick={handleCount}>incrise</button>
    </div>
  );
};

export default Count;
