import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();
export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });
  console.log("Titulo cor context:", state);

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};
