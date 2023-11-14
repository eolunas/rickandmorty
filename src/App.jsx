import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/container/Header";
import RouteManager from "./routes/RouteManager";
import { useState, useMemo } from "react";
import { FilterContext } from "./utils/context";

function App() {
  const [filters, setFilters] = useState([]);

  const contextValue = useMemo(() => {
    const updateFilters = (data) => setFilters(data);
    return [filters, updateFilters];
  }, [filters]);

  return (
    <FilterContext.Provider value={contextValue}>
      <Header />
      <RouteManager />
    </FilterContext.Provider>
  );
}

export default App;
