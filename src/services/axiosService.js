import APIRequest from "../utils/config/axios.config";

export function getData(id) {
  const apiURL = id ? `/character/${id}` : "/character";
  return APIRequest.get(apiURL, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
