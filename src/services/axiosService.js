import APIRequest from "../utils/config/axios.config";

export function getAllCharacter() {
  return APIRequest.get("/character", {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
}
