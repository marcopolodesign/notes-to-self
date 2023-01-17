import React, { useEffect, useRef, useState, useContext } from "react";
import { ModalBackground, NewNoteModalContainer, TextArea } from "./styles";
import NewNoteCats from "./new-note-cats";

import moment from "moment";
import "moment/locale/es";
import NewNote from "../../api/create-note";

const NewNoteModal = ({ closeModal }) => {
  const date = moment();
  const formattedDate = date.format("dddd D [de] MMMM YYYY");

  const [newtextareaValue, setNewTextareaValue] = useState("");

  const [newCat, setNewCat] = useState("");

  const handleSelectedCategory = (chosenCat) => {
    setNewCat(chosenCat);
  };

  const handleTextareaChange = (event) => {
    setNewTextareaValue(event.target.value);
  };

  const newtextareaRef = useRef(null);
  useEffect(() => {
    const textarea = newtextareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });

  return (
    <>
      <NewNoteModalContainer className={`modal-inner w-70-ns n-note`}>
        <p className="mb4 ttc">{formattedDate}</p>
        <TextArea
          autoFocus
          ref={newtextareaRef}
          readOnly={false}
          className="f2 bb pb4 mb4 lh-copy"
          placeholder="Un hombre con una idea nueva es un loco hasta que la idea triunfa. Mark Twain"
          onChange={handleTextareaChange}
        ></TextArea>
        <div className="flex jic">
          <div className="flex w-40">
            <NewNoteCats onSelectCategory={handleSelectedCategory} />
          </div>
          <button
            onClick={() => {
              NewNote({ newCat: newCat, newtextareaValue });
            }}
          >
            Save Note
          </button>
        </div>
      </NewNoteModalContainer>
      <ModalBackground onClick={closeModal} />
    </>
  );
};

export default NewNoteModal;
