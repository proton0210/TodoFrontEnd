import { API } from "aws-amplify";
import { useMutation, useQueryClient } from "react-query";

type UpdateTodoInput = {
  todoId: string;
  title?: string;
  completed: boolean;
};

type UpdateTodoResponse = {
  todoId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

const updateTodo = async (todoData: UpdateTodoInput) => {
  try {
    const response = await API.graphql({
      query: `
          mutation UpdateTodo($input: UpdateTodoInput!) {
            updateTodo(input: $input) {
              todoId
              title
              completed
              createdAt
              updatedAt
            }
          }
        `,
      variables: {
        input: todoData,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    return (response as any).data.updateTodo; // Use type assertion to any for response object
  } catch (error) {
    // Handle error if necessary
    console.log(error);
    throw error; // Rethrow the error or handle it according to your requirements
  }
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateTodoResponse, unknown, UpdateTodoInput>(
    (todoData) => updateTodo(todoData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export default useUpdateTodoMutation;
