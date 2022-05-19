import React from "react";
import { Bounce } from "react-reveal";
import NoteItem from "./notes_item/note_item_aktif";

function AktifNoteList({ notes, isFiltered=false, notesFiltered,  onDelete, onArchived }) {
  const notesData = isFiltered ? notesFiltered : notes
  return (
    <>
      <h2>Catatan Aktif</h2>
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

export default AktifNoteList;
