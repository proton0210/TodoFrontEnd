import { API } from "aws-amplify";
import { useMutation, useQueryClient } from "react-query";

const deleteTodo = async (todoId: string) => {
  try {
    await API.graphql({
      query: `
        mutation DeleteTodo($todoId: ID!) {
          deleteTodo(todoId: $todoId)
        }
      `,
      variables: {
        todoId: todoId,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    return { todoId };
  } catch (error) {
    // Handle error if necessary
    console.log(error);
    throw error; // Rethrow the error or handle it according to your requirements
  }
};

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<any, unknown, string>((todoId) => deleteTodo(todoId), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useDeleteTodoMutation;
