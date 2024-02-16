export const filterDataEventsByAuthors = (dataEvents) => {
  return dataEvents.filter((itemFilter) => {
    return (
      itemFilter.events.author === "ds_v3jTVjbKWukzTUd" ||
      itemFilter.events.author === "ds_MqBbtrypLFQ6X3P" ||
      itemFilter.events.author === "ds_FPFzoy8P0wqCDBl"
    );
  });
};
