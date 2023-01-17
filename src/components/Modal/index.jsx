import React, { useEffect, useRef, useState } from "react";
import { ModalBackground, Modal, TextArea } from "./styles";
import ModalMisc from "./modal-misc";
import moment from "moment";
import "moment/locale/es";

const CreateNoteComponent = ({ closeModal, note }) => {
  const noteCat = note.attributes.category.data.attributes.name;

  const date = moment(note.attributes.createdAt);
  const formattedDate = date.format("dddd D [de] MMMM YYYY");

  const [textareaValue, setTextareaValue] = useState("");
  // const [textareaHeight, settextareaHeight] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px"; // settextareaHeight(textarea.scrollHeight + "px");
  });

  return (
    <>
      <Modal className={`modal-inner w-70-ns ${noteCat}`}>
        <p className="mb4 ttc">{formattedDate}</p>
        <TextArea
          textareaHeight
          ref={textareaRef}
          readOnly={false}
          className="f2 bb pb4 mb4 lh-copy"
          defaultValue={
            note.attributes.Name ? note.attributes.Name : "Escribir aquí"
          }
          onChange={handleTextareaChange}
        ></TextArea>

        <ModalMisc
          noteCat={noteCat}
          textareaValue={textareaValue}
          noteID={note.id}
        />
      </Modal>
      <ModalBackground onClick={closeModal} />
    </>
  );
};

export default CreateNoteComponent;
