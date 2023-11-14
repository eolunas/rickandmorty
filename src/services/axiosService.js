import APIRequest from "../utils/config/axios.config";
import { getProperty } from "../utils/formatData";

// Functions for characters:
export function getData(id) {
  const apiURL = id ? `/character/${id}` : "/character";
  return APIRequest.get(apiURL, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}

export function getDataPage(page) {
  const apiURL = `/character/?page=${page}`;
  return APIRequest.get(apiURL, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}

// Functions for episodes:
export function getAllEpisodes(filters = {}, nextPage = "", data = []) {
  const filterEmpty = Object.keys(filters).length === 0;
  const name = getProperty(filters, "episode_name");
  const episode = getProperty(filters, "episode_episode");
  const query = `?name=${name}&episode=${episode}`;
  const queryfilters = !filterEmpty ? query : nextPage;
  const apiURL = `/episode/${queryfilters}`;

  return APIRequest.get(apiURL, {
    validateStatus: function (status) {
      return status < 500;
    },
  })
    .then((res) => {
      if (res.status === 200) {
        // Save data:
        data = !data ? [res.data.results] : [...data, ...res.data.results];
        // Confirm next point:
        if (res.data.info.next != null) {
          const nextPage = res.data.info.next.slice(40);
          return getAllEpisodes({}, nextPage, data);
        } else {
          return data;
        }
      }
    })
    .catch((error) => console.log(error));
}
