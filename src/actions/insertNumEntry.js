import React from "react";

export const insertNumEntry = (newNumEntry, sortType, dupAllowed) => {
  return {
    type: "NEW_CLICKED",
    payload: { newNumEntry, sortType, dupAllowed }
  };
};
