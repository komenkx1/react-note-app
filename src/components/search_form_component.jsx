import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    // binding this context to event handler
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.props.search(event.target.value);
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  render() {
    return (
      <form>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari Catatan..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
        </div>
      </form>
    );
  }
}

export default SearchForm;
