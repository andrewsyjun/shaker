export const selectSortType = (sortType, allEntries) => {
  return {
    type: "SORTTYPE_SELECTED",
    payload: { sortType, allEntries }
  };
};
