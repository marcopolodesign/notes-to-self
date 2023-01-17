import React, { useState, useEffect } from "react";
import fetchNotes from "../../api/fetch-notes";
import NoteMisc from "./misc";

const NotesComponent = ({ pickNote }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes({ setNotes });
  }, []);

  return notes.map((note) => {
    const noteWidth = note.attributes.width;
    const noteCat = note.attributes.category.data.attributes.name;
    return (
      <div
        key={note.id}
        index={note.id}
        onClick={() => {
          pickNote(note);
        }}
        className={`note flex flex-column justify-between w-${noteWidth} ${noteCat}`}
      >
        <h2>{note.attributes.Name}</h2>
        <NoteMisc
          dateCreated={note.attributes.createdAt}
          category={note.attributes.category.data.attributes.name}
        />
      </div>
    );
  });
};

export default NotesComponent;
