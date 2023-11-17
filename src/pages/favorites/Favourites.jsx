import { useEffect, useState } from "react";
import useFavoriteStorage from "../../hooks/useFavoriteStorage";
import { getDataPage } from "../../services/axiosService";
import { Carousel } from "react-bootstrap";

const Favourites = () => {
  const [items, toggleItem] = useFavoriteStorage("R&M-Characters");

  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getDataPage()
      .then((data) => {
        setCharacters((prevData) => {
          if (!prevData) return data.results;
          else return [...prevData, ...data.results];
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Favourites Characters</h1>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img src="/src/assets/Rick_and_Morty_Error_404.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/Rick_and_Morty.png" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/Rick_and_Morty_Home.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Favourites;
