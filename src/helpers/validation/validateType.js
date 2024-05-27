export const validateType = (note) => {
  if (
    typeof note.name === "string" &&
    typeof note.description === "string" &&
    typeof note.important === "boolean" &&
    typeof note.status === "string" &&
    typeof note.due_date === "string" &&
    typeof note.created_at === "number"
  ) {
    return true;
  }
  return false;
};