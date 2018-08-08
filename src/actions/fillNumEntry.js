import React from "react";
export const fillNumEntry = numEntry => {
  return {
    type: "FILL_CLICKED",
    payload: numEntry
  };
};
