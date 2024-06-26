import noteService from "../services/notes/noteService";

export const DeleteNoteButton = ({ noteId, noteName, setNote }) => {
  const handleAlertDelete = () => {
    if (confirm(`Are you sure about deleting ${noteName} ?`)) {
      noteService.noteDelete(noteId).then(() => {
        noteService.getAll().then((notes) => {
          setNote(notes.notes);
        });
      });
    }
  };

  return (
    <span>
      <button onClick={handleAlertDelete}>
        <b>Delete</b>
      </button>
    </span>
  );
};
