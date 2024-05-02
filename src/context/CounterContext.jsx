import { createContext, useState } from "react";

//Aula context
export const CounterContext = createContext();

export const CounterCountextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};