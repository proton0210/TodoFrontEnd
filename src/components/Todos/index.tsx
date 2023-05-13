import useListTodosQuery from "../../hooks/listTodo";
import Table from "./Table";

const Todos = () => {
  const { data, status } = useListTodosQuery();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error occurred while fetching todos</div>;
  }

  const todos = data || []; // Ensure data is an array or use an empty array as a fallback

  if (todos.length === 0) {
    return <h4 className="text-center mt-5">Create Todo's</h4>;
  }

  return (
    <div>
      <Table data={todos} />
    </div>
  );
};

export default Todos;
