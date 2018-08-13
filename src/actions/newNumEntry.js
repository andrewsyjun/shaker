import React from "react";

export const newNumEntry = (newNumEntry, sortType, dupAllowed) => {
  return {
    type: "NEW_CLICKED",
    payload: { newNumEntry, sortType, dupAllowed }
  };
};
