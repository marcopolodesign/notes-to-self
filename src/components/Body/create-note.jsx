import React from "react";
import { FNote } from "./styles";

const FirstNote = ({ openNewModal }) => {
  return (
    <FNote>
      {/* <input placeholder="Empezá a escribir aquí..." /> */}
      <h2 autoFocus onClick={openNewModal}>
        Start typing a new note here...
      </h2>
    </FNote>
  );
};

export default FirstNote;
