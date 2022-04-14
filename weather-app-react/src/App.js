import SignUp from "./Components/signUp";
import "./App.css";
import { SignUpProvider } from "./Contexts/signUpContext";
import WeatherInfo from "./Components/weatherinfo";
import { LocationProvider } from "./Contexts/locationContext";
import { useState } from "react";

function App() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="App">
      <SignUpProvider>
        <SignUp signIn={setSignIn} />
        {signIn ? (
          <LocationProvider>
            <WeatherInfo />
          </LocationProvider>
        ) : (
          console.log("asdasd")
        )}
      </SignUpProvider>
    </div>
  );
}

export default App;
