import { useState } from "react";

type User = {
  name: string;
  age: number;
};

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const [user, setUser] = useState<User>({
    name: "khalid",
    age: 4,
  });

  const handleCount = () => {
    setCount(count + 1);

    setUser({
      name: "robi",
      age: 5,
    });
  };

  return (
    <div>
      <p>{count}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>

      <button onClick={handleCount}>Increase</button>
    </div>
  );
};

export default Count;