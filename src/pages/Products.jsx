import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
const Products = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Pagina Produtos...! </h1>
      <h2>Valor do contador {counter}</h2>
    </div>
  );
};

export default Products;
