import React from "react";
import NoteItem from "./notes_item/note_item_aktif";
import { Bounce } from "react-reveal";


function ArsipNoteList({ notes, isFiltered=false, notesFiltered, onDelete, onArchived }) {
  const notesData = isFiltered ? notesFiltered : notes
  return (
    <>
      <h2>Catatan Diarsipkan</h2>
      {notesData.length > 0 ? (
        <div className="notes-list">
          {notesData.map((note) => {
            return (
              <Bounce opposite collapse>

              <NoteItem
                key={note.id}
                onDeleteEventHandler={onDelete}
                onArchiveEventHandler={onArchived}
                 {...note}
              />
              </Bounce>
            );
          })}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default ArsipNoteList;
