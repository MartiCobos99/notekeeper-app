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
      id: Date.now(),
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
      <h2>Add a New Person:</h2>
      <form onSubmit={addNewNote}>
        <div>
          <label htmlFor="new-Name">Name: </label>
          <input id="new-Name" value={newName} onChange={setNewName} />
          <label htmlFor="new-Number">Description: </label>
          <input
            id="new-Number"
            value={newDescription}
            onChange={setDescription}
          />
          <label htmlFor="new-Number">Important: </label>
          <input id="new-Number" value={newImportant} onChange={setImportant} />
          <label htmlFor="new-Number">status: </label>
          <input id="new-Number" value={newStatus} onChange={setStatus} />
          <label htmlFor="new-Number">due_date: </label>
          <input id="new-Number" value={newDue_Date} onChange={setDue_Date} />
          <label htmlFor="new-Number">create_at: </label>
          <input id="new-Number" value={newCreated_At} onChange={setCreated_At} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};