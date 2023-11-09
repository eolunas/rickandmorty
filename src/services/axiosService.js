import APIRequest from "../utils/config/axios.config";

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

export function getAllEpisodes(filters = "", data = []) {
  const apiURL = `/episode/${filters}`;
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
          return getAllEpisodes(nextPage, data);
        } else {
          return data;
        }
      }
    })
    .catch((error) => console.log(error));
}
