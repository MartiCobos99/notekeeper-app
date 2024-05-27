/**
 * validateType
 *
 * Validates if the properties of a given note object have the correct types.
 * The properties checked are: name, description, important, status, due_date, and created_at.
 *
 * @param {Object} note - The note object to validate.
 * @param {string} note.name - The name of the note.
 * @param {string} note.description - The description of the note.
 * @param {boolean} note.important - Indicates if the note is important.
 * @param {string} note.status - The status of the note.
 * @param {string} note.due_date - The due date of the note.
 * @param {number} note.created_at - The timestamp of when the note was created.
 * @returns {boolean} - Returns true if all properties have the correct types, otherwise false.
 */
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

//Les firmes son generades amb chat gpt
