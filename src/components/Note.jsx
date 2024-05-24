import { DeleteNoteButton } from "./DeleteNoteButton";
export const Note = ({ note, setNote }) => {
  return (
    note.map((noteInformation, i) => (
        <ul key={i}>
            <li>{noteInformation.name} </li>
            <li>{noteInformation.description} </li>
            <li>{noteInformation.important.toString()}</li>
            <li>{noteInformation.status} </li>
            <li>{noteInformation.due_date}</li>
            <li>{noteInformation.created_at}</li>
            <DeleteNoteButton noteId={noteInformation.id} noteName={noteInformation.name} setNote={setNote} />
        </ul>
    ))
  );
};
