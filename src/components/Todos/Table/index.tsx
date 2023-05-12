import React from "react";

type TableProps = {
  data: Todo[];
};

type Todo = {
  todoId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

const Table: React.FC<TableProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              {/* Table headers */}
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Completed
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="divide-y divide-gray-200">
                {data.map((todo) => (
                  <tr key={todo.todoId}>
                    <td className="px-3 py-3.5 text-left text-sm text-gray-500">
                      {formatDate(todo.createdAt)}
                    </td>
                    <td className="px-3 py-3.5 text-left text-sm text-gray-500">
                      {todo.title}
                    </td>
                    <td className="px-3 py-3.5 text-left text-sm text-gray-500">
                      {todo.completed ? "Completed" : "Incomplete"}
                    </td>
                    <td className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      {/* Edit button */}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {todo.title}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
