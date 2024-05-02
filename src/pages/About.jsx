import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Pagina About...!</h1>
      <h2>Valor do contador {counter}</h2>
    </div>
  );
};

export default About;
