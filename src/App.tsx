import "./App.css";
import { Outlet } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  );
}

export default App;
