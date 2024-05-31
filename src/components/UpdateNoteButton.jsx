import { UpdateNoteForm } from "./UpdateNoteForm";

export const UpdateNoteButton = ({
  setNote,
  note,
  noteId,
  noteName,
  noteDescription,
  noteImportant,
  noteStatus,
  noteDue_Date,
  setVisibilityUpdateForm,
  visibilityUpdateForm,
}) => {
  const handleUpdate = () => {
    setVisibilityUpdateForm(true);
  };

  return (
    <span>
      <button onClick={handleUpdate}>
        <b>Update</b>
      </button>
      {visibilityUpdateForm ? (
        <UpdateNoteForm
          id={noteId}
          note={note}
          setNote={setNote}
          noteName={noteName}
          noteDescription={noteDescription}
          noteImportant={noteImportant}
          noteStatus={noteStatus}
          noteDue_Date={noteDue_Date}
          visibilityUpdateForm={setVisibilityUpdateForm}
        />
      ) : (
        ""
      )}
    </span>
  );
};
