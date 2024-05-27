/**
 * validateNonEmpty
 *
 * Validates if all the properties of a given note object are non-empty strings.
 * The properties checked are: name, description, status, and due_date.
 *
 * @param {Object} note - The note object to validate.
 * @param {string} note.name - The name of the note.
 * @param {string} note.description - The description of the note.
 * @param {string} note.status - The status of the note.
 * @param {string} note.due_date - The due date of the note.
 * @returns {boolean} - Returns true if all properties are non-empty strings, otherwise false.
 */
export const validateNonEmpty = (note) => {
  if (
    note.name !== "" &&
    note.name.trim().length > 0 &&
    note.description !== "" &&
    note.description.trim().length > 0 &&
    note.status !== "" &&
    note.status.trim().length > 0 &&
    note.due_date !== "" &&
    note.due_date.trim().length > 0
  ) {
    return true;
  }
  return false;
};
//Les firmes son generades amb chat gpt
