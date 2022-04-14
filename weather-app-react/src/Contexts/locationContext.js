import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // I TRIED TO WORK WITH OPENWEATHERAPI BUT LIMITATION OF API MAKE ME SICK SO USE JSON API
  // const apiKey = `757d8a0c1709f53aea13894a1440ce19`;
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const values = {
    data,
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
