import "./Home.css";
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

//5 context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();
  console.log(color);

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Pagina Home...! </h1>
      <h2>Valor do contador {counter}</h2>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
