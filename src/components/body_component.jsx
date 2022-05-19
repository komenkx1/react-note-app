import React from "react";
import { getInitialData } from "../utils";
import AktifNoteList from "./active_note_component";
import ArsipNoteList from "./arsip_note_component";
import HeaderComponent from "./header_component";
import InputNoteFormComponent from "./input_note_component";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      isFilter: false,
      filteredNotes: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
        filteredNotes: [
          ...prevState.filteredNotes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ]
      };
    });
  }

  onDeleteHandler(id) {
    confirmAlert({
      title: "Alert!",
      message: "Apakah Anda Yakin Ingin Menghapus Item Ini?",
      closeOnEscape: true,
      buttons: [
        {
          label: "Yakin",
          onClick: () => {
            const notes = this.state.notes.filter((note) => note.id !== id);
            const filteredNotes = this.state.filteredNotes.filter((note) => note.id !== id);
            this.setState({ notes : notes, filteredNotes:filteredNotes });
          },
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  }

  onArchiveHandler(id) {
    const note = this.state.notes.find((note) => note.id === id);
    if (note.archived) {
      note.archived = false;
    } else {
      note.archived = true;
    }
    this.setState({ note });
  }

  onSearch(query) {
    const searchNotes = this.state.notes.filter(
      (note) =>
        note.title && note.title.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({
      isFilter: query !== "" ? true : false,
      filteredNotes: searchNotes,
    });
  }

  render() {
    return (
      <>
        <HeaderComponent title={"NoteApp"} onSearch={this.onSearch} />
        <div className="note-app__body">

          {/* Form Input New Note */}
          <div className="note-input">
            <h2>Buat Catatan</h2>
            <InputNoteFormComponent addNote={this.onAddNoteHandler} />
          </div>

          {/* Active List Item */}
          <AktifNoteList
            notes={
              this.state.notes.filter((note) => note.archived === false)
            }
            isFiltered={this.state.isFilter}
            notesFiltered={this.state.filteredNotes.filter((note) => note.archived === false)}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchiveHandler}
          />

          {/* Archived List Item */}
          <ArsipNoteList
            notes={
               this.state.notes.filter((note) => note.archived === true)
            }
            isFiltered={this.state.isFilter}
            notesFiltered={this.state.filteredNotes.filter((note) => note.archived === true)}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default BodyComponent;
