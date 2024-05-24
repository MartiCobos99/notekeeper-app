export const validateNonEmpty = (note) => {
  if (
    note[0].id !== "" &&
    note[0].id.trim().length > 0 &&
    note[0].name !== "" &&
    note[0].name.trim().length > 0 &&
    note[0].description !== "" &&
    note[0].description.trim().length > 0 &&
    note[0].status !== "" &&
    note[0].status.trim().length > 0 &&
    note[0].due_date !== "" &&
    note[0].due_date.trim().length > 0
  ) {
    return true;
  }
  return false;
};
