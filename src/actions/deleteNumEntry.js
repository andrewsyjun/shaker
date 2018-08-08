import React from "react";

export const deleteNumEntry = numEntry => {
  return {
    type: "DELETED_CLICKED",
    payload: numEntry
  };
};
