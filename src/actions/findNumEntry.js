import React from "react";

export const findNumEntry = numEntry => {
  return {
    type: "FIND_CLICKED",
    payload: numEntry
  };
};
