type Person = {
  name: string;
  age: number;
};

type Product = {
  id: string;
  name: string;
  price: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

function createProduct(id: string, name: string, price: number): Product {
  return { id, name, price };
}

const person1 = createPerson("Anders Heljsberg", 64);
const product1 = createProduct("LTP-041209", "Laptop", 5000);

console.log(person1, product1);