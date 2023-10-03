import { API } from "aws-amplify";
import { useMutation, useQueryClient } from "react-query";

type CreateTodoInput = {
  userId: string;
  title: string;
};

type CreateTodoResponse = {
  todoId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

const createTodo = async (todoData: CreateTodoInput) => {
  try {
    const response = await API.graphql({
      query: `
          mutation CreateTodo($input: CreateTodoInput!) {
            createTodo(input: $input) {
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

    return (response as any).data.createTodo; // Use type assertion to any for response object
  } catch (error) {
    // Handle error if necessary
    throw error; // Rethrow the error or handle it according to your requirements
  }
};
const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateTodoResponse, unknown, CreateTodoInput>(
    (todoData) => createTodo(todoData), // Pass accessToken to createTodo
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export default useCreateTodoMutation;
