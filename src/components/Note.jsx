import { DeleteNoteButton } from "./DeleteNoteButton";
import { UpdateNoteButton } from "./UpdateNoteButton";
export const Note = ({
  note,
  setNote,
  setVisibilityUpdateForm,
  visibilityUpdateForm,
}) => {
  return note.map((noteInformation, i) => (
    <ul key={i}>
      <li>{noteInformation.name} </li>
      <li>{noteInformation.description} </li>
      <li>{noteInformation.important.toString()}</li>
      <li>{noteInformation.status} </li>
      <li>{noteInformation.due_date}</li>
      <li>{noteInformation.created_at}</li>
      <UpdateNoteButton
        setNote={setNote}
        note={note}
        noteId={noteInformation.id}
        noteName={noteInformation.name}
        noteDescription={noteInformation.description}
        noteImportant={noteInformation.important}
        noteStatus={noteInformation.status}
        noteDue_Date={noteInformation.due_date}
        noteCreated_at={noteInformation.created_at}
        setVisibilityUpdateForm={setVisibilityUpdateForm}
        visibilityUpdateForm={visibilityUpdateForm}
      />
      <DeleteNoteButton
        noteId={noteInformation.id}
        noteName={noteInformation.name}
        setNote={setNote}
      />
    </ul>
  ));
};
