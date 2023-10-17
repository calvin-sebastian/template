import { createContext } from "react";
import useGlobals from "./hooks/useGlobals";
import WithAxios from "./hooks/WithAxios";
import NavigationStack from "./NavigationStack";
export const GlobalContext = createContext("");

function App() {
  const { ...globals } = useGlobals();
  return (
    <GlobalContext.Provider value={globals}>
      <WithAxios />
      <NavigationStack />
    </GlobalContext.Provider>
  );
}

export default App;
