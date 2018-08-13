import React from "react";

export const fillNumEntry = (newNumEntry, sortType, dupAllowed) => {
  return {
    type: "FILL_CLICKED",
    payload: { newNumEntry, sortType, dupAllowed }
  };
};
