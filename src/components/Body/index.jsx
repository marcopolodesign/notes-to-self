import React, { useState } from "react";
import { NoteStyle } from "./styles";
import FirstNote from "./create-note";
import Notes from "./notes";

const Body = ({ toggleModal, pickNote, openNewModal }) => {
  return (
    <div className="flex flex-wrap">
      <FirstNote openNewModal={openNewModal} />
      <NoteStyle />
      <Notes toggleModal={toggleModal} pickNote={pickNote} />
    </div>
  );
};

export default Body;
