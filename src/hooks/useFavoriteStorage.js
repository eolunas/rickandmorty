import { useState } from "react";

const useFavoriteStorage = (storageName) => {
  let itemData = localStorage.getItem(storageName);
  try {
    itemData = itemData ? JSON.parse(itemData) : [];
  } catch (error) {
    throw new Error("Something went wrong loading the local storage");
  }
  const [items, setItems] = useState(itemData);

  const saveLocalStorage = (data) => {
    setItems(data);
    const stringifydata = JSON.stringify(data);
    localStorage.setItem(storageName, stringifydata);
  };

  const toggleItem = (id) => {
    let newItems;
    if (!items.includes(id)) newItems = [...items, id];
    else newItems = items.filter((item) => item != id);
    saveLocalStorage(newItems);
  };

  return [items, toggleItem];
};

export default useFavoriteStorage;
