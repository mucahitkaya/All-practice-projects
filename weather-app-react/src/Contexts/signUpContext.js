import { createContext, useContext, useState } from "react";

const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const userData = {
    userName,
    setUserName,
  };

  return (
    <SignUpContext.Provider value={userData}>{children}</SignUpContext.Provider>
  );
};
export const useSignUp = () => useContext(SignUpContext);
