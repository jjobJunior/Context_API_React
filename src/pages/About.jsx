import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Pagina About...!</h1>

      <h2>Valor do contador {counter}</h2>
    </div>
  );
};

export default About;
