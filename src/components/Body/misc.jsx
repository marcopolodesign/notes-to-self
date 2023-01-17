import React from "react";
import moment from "moment";
import "moment/locale/es";

const NotesMisc = ({ dateCreated, category }) => {
  window.onload = function () {
    moment.locale("es");
  };

  const date = moment(dateCreated);
  const formattedDate = date.format("dddd D [de] MMMM YYYY");

  return (
    <div className="flex justify-between items-center note-misc">
      <p className="note-date ttc date-created">{formattedDate}</p>
      <div className="note-category ttc note-category">
        <p>{category}</p>
      </div>
    </div>
  );
};

export default NotesMisc;
