export const formatSeasonEpisodes = (rawData) => {
  let data = [];
  rawData.map((item) => {
    // Organize titles from raw data:
    let season = "Season " + item.episode.slice(1, 3);
    let episode = item.episode.slice(3);
    let listId = item.characters.map((url) => Number(url.slice(42)));

    // Confirm if exist otherwise create it:
    let hasSeason =
      !!data.length &&
      Object.prototype.hasOwnProperty.call(data[data.length - 1], season);
    if (!hasSeason) data.push({ [season]: [] });

    // Save the episode into the season:
    data[data.length - 1][season].push({
      id: item.id,
      episode: episode,
      name: item.name,
      air_date: item.air_date,
      characters: listId,
    });
  });
  return data;
};

export const getProperty = (json, prop) => {
  return Object.prototype.hasOwnProperty.call(json, prop) ? json[prop] : "";
};
