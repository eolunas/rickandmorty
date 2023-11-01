export const loadStorage = () => {
  let parsedData = [];
  try {
    let data = localStorage.getItem("rickandmorty-fav");
    parsedData = data ? JSON.parse(data) : [];
  } catch (error) {
    throw new Error("Something went wrong loading the local storage");
  }
  return parsedData;
};

export const addToStorage = (id) => {
  let favourites = loadStorage();
  if (!favourites.includes(id)) {
    favourites.push(id);
    localStorage.setItem("rickandmorty-fav", JSON.stringify(favourites));
  }
  return favourites;
};

export const removeToStorage = (id) => {
  let favourites = loadStorage();
  if (favourites.includes(id)) {
    favourites = favourites.filter((item) => item != id);
    localStorage.setItem("rickandmorty-fav", JSON.stringify(favourites));
  }
  return favourites;
};
