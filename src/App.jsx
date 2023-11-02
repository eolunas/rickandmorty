import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/container/Header";
import RouteManager from "./routes/RouteManager";

function App() {
  return (
    <>
      <Header />
      <RouteManager />
    </>
  );
}

export default App;
