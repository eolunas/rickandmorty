import PropTypes from "prop-types";
import { Accordion, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllEpisodes } from "../../services/axiosService";
import { formatSeasonEpisodes } from "../../utils/formatData";
import EpisodeContainer from "./EpisodeContainer";

const SeasonsContainer = ({ filters }) => {
  const [seasonEpisodes, setSeasonEpisodes] = useState(null);

  // Load episodes by consuming the API
  useEffect(() => {
    getAllEpisodes(filters)
      .then((data) => {
        setSeasonEpisodes(formatSeasonEpisodes(data));
      })
      .catch((error) => console.log(error));
  }, [filters]);

  return (
    <Accordion>
      {seasonEpisodes != null ? (
        <>
          {seasonEpisodes.map((item, index) => {
            let seasonName = Object.keys(item)[0];
            return (
              <Accordion.Item key={index} eventKey={String(index)}>
                <Accordion.Header>
                  <h5>{seasonName}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <Accordion>
                    {item[seasonName].map((episode, index) => {
                      return (
                        <EpisodeContainer
                          key={index}
                          episode={episode}
                        ></EpisodeContainer>
                      );
                    })}
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" />
        </div>
      )}
    </Accordion>
  );
};

SeasonsContainer.propTypes = {
  filters: PropTypes.string.isRequired,
};

export default SeasonsContainer;

// {/* {episodes != null && episodes.map((item) => item)} */}
// <Accordion.Item eventKey="1">
// <Accordion.Header>Season #1</Accordion.Header>
// <Accordion.Body>
//   <Accordion>
//     <Accordion.Item eventKey="1">
//       <Accordion.Header>Episode 01</Accordion.Header>
//       <Accordion.Body className="p-0">
//         <div
//           style={{
//             borderStyle: "solid",
//             borderWidth: "0 0 1px 0",
//             borderColor: "#dee2e6",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <img
//               src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//               alt="character profile"
//               style={{ width: "60px", borderRadius: "50%" }}
//             />
//             <span> Character 01</span>
//           </div>
//           <Button variant="outline-success">Add</Button>
//         </div>
//         <div
//           style={{
//             borderStyle: "solid",
//             borderWidth: "0 0 1px 0",
//             borderColor: "#dee2e6",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <img
//               src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//               alt="character profile"
//               style={{ width: "60px", borderRadius: "50%" }}
//             />
//             <span> Character 01</span>
//           </div>
//           <Button variant="outline-success">Add</Button>
//         </div>
//         <div
//           style={{
//             borderStyle: "solid",
//             borderWidth: "0 0 1px 0",
//             borderColor: "#dee2e6",
//             padding: "10px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <img
//               src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//               alt="character profile"
//               style={{ width: "60px", borderRadius: "50%" }}
//             />
//             <span> Character 01</span>
//           </div>
//           <Button variant="outline-success">Add</Button>
//         </div>
//       </Accordion.Body>
//     </Accordion.Item>
//     <Accordion.Item eventKey="2">
//       <Accordion.Header>Episode 02</Accordion.Header>
//       <Accordion.Body>Character 01</Accordion.Body>
//     </Accordion.Item>
//   </Accordion>
// </Accordion.Body>
// </Accordion.Item>
// <Accordion.Item eventKey="2">
// <Accordion.Header>Season #2</Accordion.Header>
// <Accordion.Body>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//   enim ad minim veniam, quis nostrud exercitation ullamco laboris
//   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//   in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//   nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//   sunt in culpa qui officia deserunt mollit anim id est laborum.
// </Accordion.Body>
// </Accordion.Item>
