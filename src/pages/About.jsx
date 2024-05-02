import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Pagina About...!</h1>
      <h2>Valor do contador {counter}</h2>
    </div>
  );
};

export default About;
