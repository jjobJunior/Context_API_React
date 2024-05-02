import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Pagina Produtos...! </h1>
      <h2>Valor do contador {counter}</h2>
    </div>
  );
};

export default Products;
