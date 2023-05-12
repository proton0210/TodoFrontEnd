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

  if (!data) return <h4 className="align-center"> Create Todo's</h4>;

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default Todos;
