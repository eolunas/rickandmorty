import APIRequest from "../utils/config/axios.config";
import { getQueryParams } from "../utils/formatData";

// Functions for characters:
export function getData(id) {
  const apiURL = id ? `/character/${id}` : "/character";
  return APIRequest.get(apiURL, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}

export function getDataPage(filters, page) {
  let newFilters = { ...filters, character_page: page };
  const query = getQueryParams(newFilters, "character_");
  const apiURL = `/character/${query}`;
  return APIRequest.get(apiURL, {
    validateStatus: function (status) {
      return status < 500;
    },
  }).then((res) => {
    if (res.status === 200) return res.data;
    else throw new Error(`${res.status}`);
  });
}

// Functions for episodes:
export function getAllEpisodes(filters = {}, nextPage = "", data = []) {
  const query = getQueryParams(filters, "episode_");
  const queryfilters = query ? query : nextPage;
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
      } else throw new Error(`${res.status}`);
    })
    .catch((error) => console.log(error));
}
