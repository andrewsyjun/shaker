import React from "react";
export const insertNumEntry = numEntry => {
  return {
    type: "INSERT_CLICKED",
    payload: numEntry
  };
};
