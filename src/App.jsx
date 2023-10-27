import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/container/Header";
import Home from "./pages/home/Home";
import Character from "./pages/character/Character";
import Error404 from "./pages/404/Error404";
import AboutPage from "./pages/about-fags/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Favourites from "./pages/favorites/Favourites";

function App() {
  //Get path route through useParams:
  const CharacterSelector = () => {
    const { id } = useParams();
    return <Character id={id} />;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/rickandmorty" element={<Home />} />
        <Route
          exact
          path="/rickandmorty/character/:id"
          element={<CharacterSelector />}
        />
        <Route exact path="/rickandmorty/favourites" element={<Favourites />} />
        {["/rickandmorty/about", "/rickandmorty/fags"].map((path, index) => (
          <Route key={index} path={path} element={<AboutPage />} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
