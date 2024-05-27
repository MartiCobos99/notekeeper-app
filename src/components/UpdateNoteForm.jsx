import { validateEnum } from "../helpers/validation/validateEnum";
import { validateNonEmpty } from "../helpers/validation/validateNonEmpty";
import { validateType } from "../helpers/validation/validateType";
import noteService from "../services/notes/noteService";
import { useUpdateForm } from "../hooks";
export const UpdateNoteForm = ({
  id,
  note,
  setNote,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
  noteCreated_at,
  visibilityUpdateForm,
}) => {
  const {
    name,
    description,
    important,
    status,
    due_Date,
    created_At,
    handleNameValue,
    handleDescriptionValue,
    handleImportantValue,
    handleStatusValue,
    handleDue_DataValue,
    handleCreated_AtValue,
  } = useUpdateForm({
    name: noteName,
    description: noteDescription,
    important: noteImportant,
    status: noteStatus,
    due_Date: noteDue_Date,
    created_At: noteCreated_at,
  });
  const editNote = (event) => {
    event.preventDefault();
    const editNote = {
      name: name,
      description: description,
      important: Boolean(important),
      status: status,
      due_date: due_Date,
      created_at: Number(created_At),
    };
    if (
      validateType(editNote) &&
      validateNonEmpty(editNote) &&
      validateEnum(editNote.status)
    ) {
      noteService
        .noteEdit(
          id,
          editNote.name,
          editNote.description,
          editNote.important,
          editNote.status,
          editNote.due_date,
          editNote.created_at
        )
        .then((data) => {
          setNote([...note, data]);
        })
        .finally(()=>{
          visibilityUpdateForm(false);
        });
    }
  };
  return (
    <div>
      <h2>Edit a Note:</h2>
      <form onSubmit={editNote}>
        <div>
          <label htmlFor="Name">Name: </label>
          <input id="Name" value={name} onChange={handleNameValue} />
          <label htmlFor="Description">Description: </label>
          <input
            id="Description"
            value={description}
            onChange={handleDescriptionValue}
          />
          <label htmlFor="Important">Important: </label>
          <input
            id="Important"
            value={important}
            onChange={handleImportantValue}
          />
          <label htmlFor="Status">status: </label>
          <input id="Status" value={status} onChange={handleStatusValue} />
          <label htmlFor="Due_Date">due_date: </label>
          <input
            id="Due_Date"
            value={due_Date}
            onChange={handleDue_DataValue}
          />
          <label htmlFor="Created">created_at: </label>
          <input
            id="Created"
            value={created_At}
            onChange={handleCreated_AtValue}
          />
        </div>
        <div>
          <button type="submit">edit</button>
        </div>
      </form>
    </div>
  );
};