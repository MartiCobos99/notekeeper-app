const baseUrl = `${import.meta.env.VITE_ENPOINT}`;
const getAll = () => {
  const request = fetch(baseUrl).then((response) => {
    return response.json();
  });
  return request;
};

const create = (newObject) => {
  const request = fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const noteDelete = (id) => {
  const request = fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
  return request;
};

const noteEdit = (
  id,
  name,
  description,
  important,
  status,
  due_date,
  create_at,
) => {
  const data = {
    name: name,
    description: description,
    important: important,
    status: status,
    due_date: due_date,
    create_at: create_at,
  };
  const request = fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
  return request;
};

export default {
  getAll: getAll,
  create: create,
  noteDelete: noteDelete,
  noteEdit: noteEdit,
};
