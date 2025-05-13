type Person = {
  name: string;
  age: number;
};

type Product = {
  id: string;
  name: string;
  price: number;
  tipo: string;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

function createProduct(id: string, name: string, price: number , tipo :string): Product {
  return { id, name, price, tipo };
}

const person1 = createPerson("Anders Heljsberg", 64);
const product1 = createProduct("LTP-041209", "Laptop", 5000,"beleza");

console.log(person1, product1);