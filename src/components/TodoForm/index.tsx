// give me tailwind form

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import useCreateTodoMutation from "../../hooks/createTodo";
type CreateTodoInput = {
  userId: string;
  title: string;
};

export default function TodoForm() {
  const { user } = useAuth();
  const createTodoMutation = useCreateTodoMutation();
  const [title, setTitle] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoData: CreateTodoInput = {
      userId: user.id,
      title,
    };

    try {
      const result = await createTodoMutation.mutateAsync(todoData); // Pass accessToken directly
      console.log(result);

      // Reset the form fields or handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Enter Your Todo
          </h3>
          <form
            className="mt-5 sm:flex sm:items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-full sm:max-w-xs">
              <label htmlFor="todo" className="sr-only">
                Todo
              </label>
              <input
                type="text"
                name="todo"
                id="todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Buy Groceries"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
