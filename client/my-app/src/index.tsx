import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";

interface CurrentUserContextType {
  user: any;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CurrentUserContext.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <App />
    </CurrentUserContext.Provider>
  </React.StrictMode>
);
