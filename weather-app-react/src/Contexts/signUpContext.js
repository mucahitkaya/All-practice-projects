import { createContext, useContext, useState } from "react";

const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const userData = {
    userName,
    setUserName,
  };

  // yieea bady layt veyt
  return (
    <SignUpContext.Provider value={userData}>{children}</SignUpContext.Provider>
  );
};
export const useSignUp = () => useContext(SignUpContext);
