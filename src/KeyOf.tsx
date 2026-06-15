type User = {
    name: string;
    age: number
}
function getValue<T , K extends keyof T>(
    obj: T,
    key: K

)

getValue(
  { name: "Khalid", age: 25 },
  "name"
);