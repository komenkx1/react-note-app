import SearchForm from "./search_form_component";

function HeaderComponent(props) {
  const title = props.title;

  return (
    <header>
      <div className="note-app__header">
        <h1>{title}</h1>
        <SearchForm search={props.onSearch} />
      </div>
    </header>
  );
}

export default HeaderComponent;
