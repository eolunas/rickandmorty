import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Characters from "../pages/characters/Characters";
import Error404 from "../pages/404/Error404";
import AboutPage from "../pages/about-fags/AboutPage";
import Favourites from "../pages/favorites/Favourites";
import Locations from "../pages/locations/Locations";

const RouteManager = () => {
  return (
    <Routes>
      <Route exact path="/rickandmorty" element={<Home />} />
      <Route path="/rickandmorty/characters" element={<Characters />} />
      <Route path="/rickandmorty/favourites" element={<Favourites />} />
      <Route path="/rickandmorty/locations" element={<Locations />} />
      {["/rickandmorty/about", "/rickandmorty/fags"].map((path, index) => (
        <Route key={index} path={path} element={<AboutPage />} />
      ))}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RouteManager;