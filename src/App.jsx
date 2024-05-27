import { NotesList, CreateNoteForm } from "./components";
import { useVisibilityUpdateForm, useCreateForm, useNote } from "./hooks";

function App() {
  const {
    newName,
    newDescription,
    newImportant,
    newStatus,
    newDue_Date,
    newCreated_At,
    handleNewNameValue,
    handleNewDescriptionValue,
    handleNewImportantValue,
    handleNewStatusValue,
    handleNewDue_DataValue,
  } = useCreateForm();
  const { note, handleNote } = useNote();
  const { visibilityUpdateForm, handleVisibilityUpdateFormValue } =
    useVisibilityUpdateForm();
  return (
    <>
      <h1>notekeeper-app</h1>
      <NotesList
        note={note}
        setNote={handleNote}
        setVisibilityUpdateForm={handleVisibilityUpdateFormValue}
        visibilityUpdateForm={visibilityUpdateForm}
      />
      <CreateNoteForm
        note={note}
        setNote={handleNote}
        newName={newName}
        setNewName={handleNewNameValue}
        newDescription={newDescription}
        setDescription={handleNewDescriptionValue}
        newImportant={newImportant}
        setImportant={handleNewImportantValue}
        newStatus={newStatus}
        setStatus={handleNewStatusValue}
        newDue_Date={newDue_Date}
        setDue_Date={handleNewDue_DataValue}
      />
    </>
  );
}

export default App;
