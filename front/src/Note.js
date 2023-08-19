function Note(props) {

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:8080/note/${props.id}`, {
      method: "Delete",
    });
    const res = await response.json();
    console.log(res);
  }

  return (
    <div className="card shadow border-0 bg-light text-center m-3 p-2 col-lg-6 mx-auto">
      <div className="card-header">
        <h3 className="text-lead">{props.title}</h3>
        <i className="text-info">Note By {props.author}</i>
      </div>
      <div className="card-body">{props.body}</div>
      <button
        onClick={(id) => handleDelete(id) }
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
