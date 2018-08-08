import React from "react";

export const newNumEntry = newNumEntry => {
  return {
    type: "NEW_CLICKED",
    payload: newNumEntry
  };
};
