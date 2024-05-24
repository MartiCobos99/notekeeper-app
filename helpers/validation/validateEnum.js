export const validateEnum = (note) => {
  if (note === "Pending" || note === "In Progress" || note === "Done") {
    return true;
  }
  return false;
};
