import React from "react";

class InputNoteFormComponent extends React.Component {
  colorInput;
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      counter: 50,
    };

    // binding this context to event handler
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event, limitCharacter) {
    const maxCharacter = limitCharacter;
    if (event.target.value.length <= maxCharacter) {
      this.setState(() => {
        return {
          title: event.target.value,
          counter: maxCharacter - event.target.value.length,
        };
      });
    }else{

      return alert("maksimal karakter adalah 50")
    }
  }

  onBodyChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addNote(this.state);

    this.setState((prevState) => {
      return {
        ...prevState,
        title: "",
        body: "",
        counter : 50
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.counter}
        </p>
        <input
          required
          type="text"
          placeholder="Masukan Judul...."
          value={this.state.title}
          onChange={(e) => this.onTitleChangeHandler(e, 50)}
          className="note-input__title"
        />
        <textarea
          required
          type="text"
          placeholder="Tuliskan Catatanmu Disini"
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
          className="note-input__body"
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default InputNoteFormComponent;
