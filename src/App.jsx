import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import rmLogo from "/rickandmorty.svg";
import "./App.css";
import Header from "./components/container/Header";
import Home from "./pages/home/Home";
import Character from "./pages/character/character";
import Error404 from "./pages/404/Error404";
import AboutPage from "./pages/about-fags/AboutPage";

function App() {

  //Get path route through useParams:
  const CharacterSelector = () => {
    const { id } = useParams();
    return <Character id={id} />;
  };

  return (
    <>
      <Router>
        <Header icon={rmLogo}>
          <Link to="/">| HOME |</Link>
          <Link to="/character/1"> Character 1 |</Link>
          <Link to="/character/2"> Character 2 |</Link>
          <Link to="/about"> ABOUT |</Link>
          <Link to="/404"> Error 404 |</Link>
        </Header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/character" element={<Character />} />
            <Route
              exact
              path="/character/:id"
              element={<CharacterSelector />}
            />
            {["about", "fags"].map((path, index) => (
              <Route key={index} path={path} element={<AboutPage />} />
            ))}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
