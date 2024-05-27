import "../css.css";
import { validateEnum } from "../helpers/validation/validateEnum";
import { validateNonEmpty } from "../helpers/validation/validateNonEmpty";
import { validateType } from "../helpers/validation/validateType";
import noteService from "../services/notes/noteService";
export const CreateNoteForm = ({
  note,
  setNote,
  newName,
  setNewName,
  newDescription,
  setDescription,
  newImportant,
  setImportant,
  newStatus,
  setStatus,
  newDue_Date,
  setDue_Date,
  newCreated_At,
  setCreated_At,
}) => {
  const addNewNote = (event) => {
    event.preventDefault();
    const newNote = {
      name: newName,
      description: newDescription,
      important: Boolean(newImportant),
      status: newStatus,
      due_date: newDue_Date,
      created_at: Number(newCreated_At),
    };
    if (
      validateType(newNote) &&
      validateNonEmpty(newNote) &&
      validateEnum(newNote.status)
    ) {
      noteService.create(newNote).then((data) => {
        setNote([...note, data]);
      });
    }
  };
  return (
    <div>
      <h2>Add a New Note:</h2>
      <form onSubmit={addNewNote}>
        <div>
          <label htmlFor="new-Name">Name: </label>
          <input id="new-Name" value={newName} onChange={setNewName} />
          <label htmlFor="new-Description">Description: </label>
          <input
            id="new-Description"
            value={newDescription}
            onChange={setDescription}
          />
          <label htmlFor="new-Important">Important: </label>
          <input
            id="new-Important"
            value={newImportant}
            onChange={setImportant}
          />
          <label htmlFor="new-Status">status: </label>
          <input id="new-Status" value={newStatus} onChange={setStatus} />
          <label htmlFor="new-Due_Date">due_date: </label>
          <input id="new-Due_Date" value={newDue_Date} onChange={setDue_Date} />
          <label htmlFor="new-Created">created_at: </label>
          <input
            id="new-Created"
            value={newCreated_At}
            onChange={setCreated_At}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
