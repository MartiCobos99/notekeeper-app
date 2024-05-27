import { Note } from "./Note"
export const NotesList = ({
  note,
  setNote,
  setVisibilityUpdateForm,
  visibilityUpdateForm,
}) => {
  return (
    <div>
      {note.length > 0 ? (
        <Note
          note={note}
          setNote={setNote}
          setVisibilityUpdateForm={setVisibilityUpdateForm}
          visibilityUpdateForm={visibilityUpdateForm}
        />
      ) : (
        <p>Empty List</p>
      )}
    </div>
  );
};