import React from "react";


    function dateFormat(DateTime) {
     const day =  DateTime.toLocaleDateString("ID", {weekday: "long"});
     const date =  DateTime.getDate();
     const month =   DateTime.toLocaleDateString("ID", {month: "long"});
     const year =   DateTime.getFullYear();

        return `${day}, ${date} ${month} ${year}` ;
    }

  
function NoteItem({ id, title, body, createdAt, archived, onDeleteEventHandler, onArchiveEventHandler }) {

    const date  = new Date(createdAt);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{dateFormat(date)} </p>
        <p className="note-item__body">
         {body}
        </p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDeleteEventHandler(id)}>Delete</button>
        <button className="note-item__archive-button"  onClick={() => onArchiveEventHandler(id)}>{archived ? "Pindahkan" : "Arsipkan"}</button>
      </div>
    </div>
  );
}

export default NoteItem;
