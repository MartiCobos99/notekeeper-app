/**
 * validateEnum
 *
 * Validates if a given note is one of the predefined statuses: "Pending", "In Progress", or "Done".
 *
 * @param {string} note - The note status to validate.
 * @returns {boolean} - Returns true if the note is one of the valid statuses, otherwise false.
 */
export const validateEnum = (note) => {
  if (note === "pending" || note === "in progress" || note === "done") {
    return true;
  }
  return false;
};
//Les firmes son generades amb chat gpt
