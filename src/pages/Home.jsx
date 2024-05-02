import "./Home.css";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Pagina Home...! </h1>
      <h2>Valor do contador {counter}</h2>
      <ChangeCounter/>
    </div>
  );
};

export default Home;
