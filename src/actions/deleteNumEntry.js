import React from "react";

export const deleteNumEntry = (newNumEntry, sortType, dupAllowed) => {
  return {
    type: "NEW_CLICKED",
    payload: { newNumEntry, sortType, dupAllowed }
  };
};
