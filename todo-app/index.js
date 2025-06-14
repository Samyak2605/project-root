const backendUrl = "http://todo-backend.default.svc.cluster.local:3001";

// GET
const fetchTodos = async () => {
  const res = await fetch(`${backendUrl}/todos`);
  const data = await res.json();
  setTodos(data); // if using React
};

// POST
const addTodo = async (todoText) => {
  await fetch(`${backendUrl}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo: todoText }),
  });
};
