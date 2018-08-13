import React from "react";

export const findNumEntry = (newNumEntry, sortType, dupAllowed) => {
  return {
    type: "NEW_CLICKED",
    payload: { newNumEntry, sortType, dupAllowed }
  };
};
