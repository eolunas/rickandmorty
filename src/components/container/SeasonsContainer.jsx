import { Accordion, Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { getAllEpisodes } from "../../services/axiosService";
import { formatSeasonEpisodes } from "../../utils/formatData";
import EpisodeContainer from "./EpisodeContainer";
import { FilterContext } from "../../utils/context";

const SeasonsContainer = () => {
  const [filters] = useContext(FilterContext);

  const [seasonEpisodes, setSeasonEpisodes] = useState(null);

  // Load episodes by consuming the API
  useEffect(() => {
    getAllEpisodes(filters)
      .then((data) => {
        setSeasonEpisodes(formatSeasonEpisodes(data));
      })
      .catch((error) => console.log(error));
    console.log(filters);
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

export default SeasonsContainer;
