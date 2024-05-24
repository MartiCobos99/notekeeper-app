export const validateType = (note) => {
  if (
    typeof note[0].id === "string" &&
    typeof note[0].name === "string" &&
    typeof note[0].description === "string" &&
    typeof note[0].important === "boolean" &&
    typeof note[0].status === "string" &&
    typeof note[0].due_date === "string" &&
    typeof note[0].created_at === "number"
  ) {
    return true;
  }
  return false;
};
